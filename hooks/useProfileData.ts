import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { graphQLClient, QUERIES } from '../graphql';

export function useProfileData() {
  return useQuery(QUERIES.getUserData, async () => {
    const { viewer } = await graphQLClient!.request(gql`
      query {
        viewer {
          login
          id
          avatarUrl
          name
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories {
            totalCount
          }
        }
      }
    `);
      return viewer;
    }
  )
};
