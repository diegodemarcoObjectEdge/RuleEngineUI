import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "/graphql",
  credentials: "include",
});

export const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: httpLink,
  cache: new InMemoryCache(),
});
