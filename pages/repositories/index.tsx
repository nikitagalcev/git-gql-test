import { useRepositories } from '../../hooks/useRepositories';
import { useProfileData } from '../../hooks/useProfileData';
import { RepositoryItem, IRepositoryItems } from '../../components/RepositoryItem';
import { UserInfo } from '../../components/UserInfo';

const Repositories = () => {
  const { 
    data: userData, 
    error: userError, 
    isLoading: userIsLoading
  } = useProfileData();

 const { data, error, isLoading } = useRepositories(userData?.login);

 if (error) return <h1>Something went wrong</h1>
 if (isLoading) return <h1>Loading....</h1>

 const { repositories: { nodes: repositories } } = data;

 const renderUserInfo = () => {
  if (userIsLoading) return <h1>Loading....</h1>
  if (userError) return <h1>Something went wrong</h1>

  return <UserInfo data={userData}/>
};

  return (
    <main className="flex flex-column max-w-full mt-20 justify-between">
      {renderUserInfo()}

      {repositories ? 
        <ul className="flex flex-wrap list-disc mr-80 max-w-screen-sm">
          {repositories.map(({
              name, 
              createdAt, 
              diskUsage, 
              owner, 
              stargazers, 
              url, 
              updatedAt
            }: IRepositoryItems) => ( 
              <RepositoryItem 
                name={name} 
                createdAt={createdAt} 
                diskUsage={diskUsage}
                owner={owner}
                stargazers={stargazers}
                url={url}
                updatedAt={updatedAt}
                key={createdAt}
              />
            ))}
          </ul> 
      : <h2>No repositories to show here :(</h2>}
    </main> 
  );
};

export default Repositories;