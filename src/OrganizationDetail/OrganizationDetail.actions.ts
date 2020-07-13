import { ThunkAction } from 'redux-thunk'
import { gql } from 'apollo-boost'

import { IStore } from '../store'
import {
  IPinnedItem,
  IRepository,
  IOrganizationInfo,
  OrganizationDetailActionTypes,
  FETCH_ORGANIZATION_DETAIL_START,
  FETCH_ORGANIZATION_DETAIL_SUCCESS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_ORGANIZATION_DETAIL_FAIL
} from './OrganizationDetail.types'
import apolloClient from '../config/apolloClient'

export const fetchOrganizationDataStart = (): OrganizationDetailActionTypes => ({
  type: FETCH_ORGANIZATION_DETAIL_START
})

export const fetchOrganizationDataSuccess = (organizationInfo: IOrganizationInfo) => ({
  type: FETCH_ORGANIZATION_DETAIL_SUCCESS,
  organizationInfo
})

export const fetchRepositoriesSuccess = (repositories: Array<IRepository>) => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  repositories
})

export const fetchOrganizationDataFail = () => ({
  type: FETCH_ORGANIZATION_DETAIL_FAIL
})

const normalizePinnedItems = (pinnedItems: Array<any>): Array<IPinnedItem> => {
  return pinnedItems.map((pinnedItem: any): IPinnedItem => {
    const { id, name, forkCount, description, primaryLanguage, stargazers: { totalCount }, resourcePath } = pinnedItem.node
    return {
      id,
      name,
      forkCount,
      description,
      primaryLanguage: (primaryLanguage && {
        name: primaryLanguage.name,
        color: primaryLanguage.color
      }),
      stars: totalCount,
      resourcePath
    }
  })
}

const normalizeRepositories = (repositories: Array<any>): Array<IRepository> => {
  return repositories.map((repo: any): IRepository => {
    const { id, name, description, isFork, forkCount, licenseInfo, parent, resourcePath, stargazers: { totalCount }, primaryLanguage, updatedAt } = repo
    return {
      id,
      name,
      description,
      isFork,
      forkCount,
      forkedFrom: parent?.nameWithOwner,
      license: licenseInfo?.spdxId,
      resourcePath,
      stars: totalCount,
      primaryLanguage: (primaryLanguage && {
        name: primaryLanguage.name,
        color: primaryLanguage.color
      }),
      updatedAt
    }
  })
}

export const getOrganizationData = (organizationName: string): ThunkAction<void, IStore, undefined, any> => {
  return (dispatch) => {
    dispatch(fetchOrganizationDataStart())
    apolloClient.query({
      query: gql`
        {
          organization(login: "${organizationName}") {
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
    })
    .then((result: any) => {
      const { name, description, avatarUrl, location, websiteUrl, pinnedItems, repositories } = result.data.organization
      const organizationInfo: IOrganizationInfo = {
        name,
        description,
        avatarUrl,
        location,
        websiteUrl,
        pinnedItems: normalizePinnedItems(pinnedItems.edges)
      }
      
      const repos: Array<IRepository> = normalizeRepositories(repositories.nodes)

      dispatch(fetchOrganizationDataSuccess(organizationInfo))
      dispatch(fetchRepositoriesSuccess(repos))
    })
    .catch(e => {
      console.log(e)
      dispatch(fetchOrganizationDataFail())
    })
  }
}