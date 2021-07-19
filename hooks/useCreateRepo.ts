import { useMutation } from 'react-query';
import { gql } from 'graphql-request';
import { graphQLClient, MUTATIONS } from '../graphql';

export function useCreateRepoMutation() {
  return useMutation(({ id, repoName }) => {
    return graphQLClient!.request(
      gql`
        mutation CreateRepoPayload(
          $id: String!, 
          $repoName: String!
        ) {
          createRepository(input: {
            name: $repoName,
            ownerId: $id,
            visibility: PRIVATE
          }) {
            repository {
              name
              createdAt
            }
          }
        }
      `, {id, repoName})
  })
}