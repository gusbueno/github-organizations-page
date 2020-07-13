import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })
const cache = new InMemoryCache({})
const GITHUB_TOKEN: string = process.env.GITHUB_TOKEN || ''

const apolloLink = new ApolloLink((operation, forward) => {
  if (GITHUB_TOKEN) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${GITHUB_TOKEN}`,
      }
    })
  }
  return forward(operation)
})

const apolloClient = new ApolloClient({
  link: apolloLink.concat(httpLink),
  cache
})

export default apolloClient
