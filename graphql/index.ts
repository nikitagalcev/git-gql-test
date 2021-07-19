import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://api.github.com/graphql';

export let graphQLClient: null | GraphQLClient = null;

export function CreateGraphQLClient (token: string) {
  graphQLClient = new GraphQLClient(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export enum QUERIES {
  getUserData = 'get-user-data',
  getRepositories = 'get-repositories'
}

export enum MUTATIONS {
  createRepo = 'create-repo',
}
