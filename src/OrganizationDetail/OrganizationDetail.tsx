import React from 'react'

import {
  Container
} from './OrganizationDetail.styles'
import type { Props } from './OrganizationDetail.types'
import SearchBar from './components/SearchBar'
import OrganizationDetailEmpty from './components/OrganizationDetailEmpty'
import OrganizationDetailLoading from './components/OrganizationDetailLoading'
import OrganizationInfo from './components/OrganizationInfo'

const OrganizationDetail = ({ onGetOrganizationData, isFetching, organizationInfo }: Props) => {
  const handleSearchOrganization = (organizationName: string) => {
    onGetOrganizationData(organizationName)
  }

  const renderContent = () => {
    return organizationInfo ?
      <OrganizationInfo info={organizationInfo} /> :
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
