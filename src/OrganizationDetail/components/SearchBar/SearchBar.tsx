import React, { useState, SyntheticEvent } from 'react'

import {
  Container
} from './SearchBar.styles'
import Input from '../../../UI/Input'
import Button from '../../../UI/Button'
import type { Props } from './SearchBar.types'

const SearchBar = ({ onSearchOrganization }: Props) => {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    onSearchOrganization(term)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  return (
    <Container onSubmit={handleFormSubmit}>
      <Input value={term} placeholder="Search for an organization" onChange={handleInputChange} />
      <Button ml={12} type="submit" isDisabled={!term}>Search</Button>
    </Container>
  )
}

export default SearchBar
