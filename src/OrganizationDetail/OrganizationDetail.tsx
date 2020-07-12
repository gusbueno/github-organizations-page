import React from 'react'

import {
  Container
} from './OrganizationDetail.styles'
import SearchBar from './components/SearchBar'

const OrganizationDetail = () => {
  const handleSearchOrganization = (term: string) => {
    console.log(term)
  }

  return (
    <Container>
      <SearchBar onSearchOrganization={handleSearchOrganization} />
      <h1>Organization Detail</h1>
    </Container>
  )
}

export default OrganizationDetail
