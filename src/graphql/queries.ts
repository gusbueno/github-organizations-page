import { gql } from '@apollo/client'

export const GET_ORGANIZATION = gql`
  query GetOrganization($login: String!) {
    organization(login: $login) {
      name
      location
      avatarUrl
      websiteUrl
      description
      pinnedItems(first: 10) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              forkCount
              resourcePath
              primaryLanguage {
                name
                color
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
      repositories(first: 10) {
        nodes {
          id
          name
          description
          updatedAt
          forkCount
          isFork
          resourcePath
          parent {
            nameWithOwner
          }
          primaryLanguage {
            name
            color
          }
          licenseInfo {
            spdxId
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`
