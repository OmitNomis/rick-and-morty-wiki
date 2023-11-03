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
