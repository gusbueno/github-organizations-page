import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import apolloClient from './config/apolloClient'
import OrganizationDetail from './OrganizationDetail'

render(
  <ApolloProvider client={apolloClient}>
    <OrganizationDetail />
  </ApolloProvider>,
  document.getElementById('root')
)
