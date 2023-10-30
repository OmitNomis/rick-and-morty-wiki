import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {},
  }),
  link: ApolloLink.from([
    new HttpLink({
      uri: "https://rickandmortyapi.com/graphql",
    }),
  ]),
});
