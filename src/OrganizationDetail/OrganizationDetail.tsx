import React from 'react'

import {
  Container
} from './OrganizationDetail.styles'
import type { Props } from './OrganizationDetail.types'
import SearchBar from './components/SearchBar'
import OrganizationDetailEmpty from './components/OrganizationDetailEmpty'
import OrganizationDetailLoading from './components/OrganizationDetailLoading'
import OrganizationInfo from './components/OrganizationInfo'
import OrganizationRepositories from './components/OrganizationRepositories'

const OrganizationDetail = ({ onGetOrganizationData, isFetching, organizationInfo, repositories }: Props) => {
  const handleSearchOrganization = (organizationName: string) => {
    onGetOrganizationData(organizationName)
  }

  const renderContent = () => {
    return organizationInfo ? (
        <>
          <OrganizationInfo info={organizationInfo} /> 
          <OrganizationRepositories repositories={repositories} />
        </>
      ) :
      <OrganizationDetailEmpty />
  }

  return (
    <Container>
      <SearchBar onSearchOrganization={handleSearchOrganization} />
      {isFetching ?
        <OrganizationDetailLoading /> :
        renderContent()
      }
    </Container>
  )
}

export default OrganizationDetail
