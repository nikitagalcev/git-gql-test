import { useForm } from 'react-hook-form';
import { useCreateRepoMutation } from '../hooks/useCreateRepo';

export const UserInfo = (data: any) => {  
  const { avatarUrl, login, name, followers, following, repositories, id } = data.data;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { mutateAsync } = useCreateRepoMutation()
  
  const onSubmit = (data: {repoNameRequired: string}) => {
    mutateAsync({id, repoName: data.repoNameRequired})
  };

  return (
    <div className="ml-10 text-center">
      <img className="max-w-xs rounded-full" src={avatarUrl} alt="user avatar"/>
      <p className="mt-10">Name: {name}</p>
      <p>Login: {login}</p>
      <p>Followers: {followers.totalCount}</p>
      <p>Following: {following.totalCount}</p>
      <p>Repositories: {repositories.totalCount}</p>

      <div className="mt-20 w-full max-w-xs">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2>Create new Repo!</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="token">
              Enter Repository Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="repoName" {...register("repoNameRequired", { required: true })} />
            {errors.repoNameRequired && <span className="text-red-500 text-xs italic">This field is required</span>}
          </div>      
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create Repo</button>
        </form>
      </div>
    </div>
  )
}