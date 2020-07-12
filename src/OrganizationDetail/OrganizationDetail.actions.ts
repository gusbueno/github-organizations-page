import { ThunkAction } from 'redux-thunk'
import { gql } from 'apollo-boost'

import { IStore } from '../store'
import apolloClient from '../config/apolloClient'


export const getOrganizationData = (organizationName: string): ThunkAction<void, IStore, undefined, any> => {
  return (dispatch, getState) => {
    apolloClient.query({
      query: gql`
        {
          organization(login: "${organizationName}") {
            name
            email
            location
            avatarUrl
            websiteUrl
            isVerified
            description
            pinnedItems(first: 10) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
            repositories(first: 10) {
              nodes {
                name
                description
                updatedAt
                forkCount
                isFork
                parent {
                  nameWithOwner
                }
                primaryLanguage {
                  name
                  color
                }
                licenseInfo {
                  name
                  nickname
                }
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      `
    })
    .then((result: any) => {
      console.log(result)
    })
    .catch(e => console.log(e))
  }
}