import React from 'react'

import {
  Container
} from './OrganizationDetail.styles'
import type { Props } from './OrganizationDetail.types'
import SearchBar from './components/SearchBar'

const OrganizationDetail = ({ onGetOrganizationData, isFetching, organizationInfo }: Props) => {
  const handleSearchOrganization = (organizationName: string) => {
    onGetOrganizationData(organizationName)
  }

  return (
    <Container>
      <SearchBar onSearchOrganization={handleSearchOrganization} />
      <h1>Organization Detail</h1>
    </Container>
  )
}

export default OrganizationDetail
