import React from 'react'
import { useLazyQuery } from '@apollo/client'

import {
  Container
} from './OrganizationDetail.styles'
import type {
  IRepository,
  IOrganizationInfo,
} from './OrganizationDetail.types'
import { GET_ORGANIZATION } from '../graphql/queries'
import { normalizePinnedItems, normalizeRepositories } from '../utils'
import SearchBar from './components/SearchBar'
import OrganizationDetailEmpty from './components/OrganizationDetailEmpty'
import OrganizationDetailLoading from './components/OrganizationDetailLoading'
import OrganizationInfo from './components/OrganizationInfo'
import OrganizationRepositories from './components/OrganizationRepositories'

const OrganizationDetail = () => {
  const [loadOrganization, { loading, error, data }] = useLazyQuery(GET_ORGANIZATION, {
    variables: { login: '' }
  })

  const handleSearchOrganization = (organizationName: string) => {
    loadOrganization({ variables: { login: organizationName } })
  }

  const renderContent = () => {
    if (data?.organization && !error) {
      const { name, description, avatarUrl, location, websiteUrl, pinnedItems, repositories } = data.organization
      const organizationInfo: IOrganizationInfo = {
        name,
        description,
        avatarUrl,
        location,
        websiteUrl,
        pinnedItems: normalizePinnedItems(pinnedItems.edges)
      }
      
      const repos: Array<IRepository> = normalizeRepositories(repositories.nodes)

      return (
        <>
          <OrganizationInfo info={organizationInfo} /> 
          <OrganizationRepositories repositories={repos} />
        </>
      )
    }

    return <OrganizationDetailEmpty />
  }

  return (
    <Container>
      <SearchBar onSearchOrganization={handleSearchOrganization} />
      {loading ?
        <OrganizationDetailLoading /> :
        renderContent()
      }
    </Container>
  )
}

export default OrganizationDetail
