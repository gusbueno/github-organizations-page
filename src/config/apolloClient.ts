import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, HttpOptions } from '@apollo/client'

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })
const cache = new InMemoryCache()
const GITHUB_TOKEN: string = process.env.GITHUB_TOKEN || ''

const apolloLink = new ApolloLink((operation, forward) => {
  if (GITHUB_TOKEN) {
    operation.setContext(({ headers }: HttpOptions ) => ({
      headers: {
        authorization: `Bearer ${GITHUB_TOKEN}`,
        ...headers
      }
    }))
  }
  return forward(operation)
})

const apolloClient = new ApolloClient({
  link: apolloLink.concat(httpLink),
  cache
})

export default apolloClient
