export interface IRepositoryItems {
  name: string,
  createdAt: string,
  diskUsage: number,
  owner: {login: string},
  stargazers: {totalCount: number},
  url: string,
  updatedAt: string
}

export const RepositoryItem: React.FC <IRepositoryItems> = ({
  name, 
  createdAt, 
  diskUsage, 
  owner, 
  stargazers, 
  url, 
  updatedAt
}) => {

  const created = new Date(createdAt).toLocaleDateString();
  const updated = new Date(updatedAt).toLocaleDateString();
  
  return (
    <li className="mr-10 mb-10 border list-none rounded-sm px-3 py-3">
      <a href={url} target="_blank">
        {name}
        <p>Owner: {owner.login}</p>
        <p>Size: {diskUsage}</p>
        <p>Created: {created}</p>
        <p>Updated: {updated}</p>
        <p>Stars: {stargazers.totalCount}</p>
      </a>
    </li>
  );
};