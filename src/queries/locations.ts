import { gql } from "@apollo/client";

export const GET_ALL_LOCATION = gql`
  query GetAllLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        count
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          image
          name
          status
        }
      }
    }
  }
`;

export const GET_SINGLE_LOCATION = gql`
  query GetSingleLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        image
        name
      }
    }
  }
`;
