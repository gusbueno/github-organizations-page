import { ThunkAction } from 'redux-thunk'
import { gql } from 'apollo-boost'

import { IStore } from '../store'
import {
  IPinnedItem,
  IOrganizationInfo,
  OrganizationDetailActionTypes,
  FETCH_ORGANIZATION_DETAIL_START,
  FETCH_ORGANIZATION_DETAIL_SUCCESS,
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

export const fetchOrganizationDataFail = () => ({
  type: FETCH_ORGANIZATION_DETAIL_FAIL
})

const normalizePinnedItems = (pinnedItems: Array<any>): Array<IPinnedItem> => {
  return pinnedItems.map((pinnedItem: any) => {
    const { name, forkCount, description, primaryLanguage, stargazers: { totalCount } } = pinnedItem.node
    return {
      name,
      forkCount,
      description,
      primaryLanguage: {
        name: primaryLanguage.name,
        color: primaryLanguage.color
      },
      stars: totalCount
    }
  })
}

export const getOrganizationData = (organizationName: string): ThunkAction<void, IStore, undefined, any> => {
  return (dispatch, getState) => {
    dispatch(fetchOrganizationDataStart())
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
                    forkCount
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
      const { name, description, avatarUrl, email, isVerified, location, websiteUrl, pinnedItems } = result.data.organization
      const organizationInfo: IOrganizationInfo = {
        name,
        description,
        avatarUrl,
        email,
        isVerified,
        location,
        websiteUrl,
        pinnedItems: normalizePinnedItems(pinnedItems.edges)
      }
      
      dispatch(fetchOrganizationDataSuccess(organizationInfo))
    })
    .catch(e => {
      console.log(e)
      dispatch(fetchOrganizationDataFail())
    })
  }
}