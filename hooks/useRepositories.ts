import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { graphQLClient, QUERIES } from '../graphql';

export function useRepositories(userLogin: string) {
  return useQuery([QUERIES.getRepositories, userLogin], async () => {
      const { repositoryOwner } = await graphQLClient!.request(
        gql`
         query repositoryOwner($userLogin: String!) {
          repositoryOwner(login: $userLogin) {
            repositories(
                last: 40, 
                orderBy: {field: CREATED_AT, direction: DESC}
              ) {
              totalCount
              nodes {
                name
                url
                createdAt
                updatedAt
                diskUsage
                stargazers {
                  totalCount
                }
                owner {
                  login
                }
              }
            }
          }
         }
        `, { userLogin });
      return repositoryOwner;
    }
  )
}

