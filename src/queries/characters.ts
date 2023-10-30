import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      info {
        pages
      }
      results {
        id
        name
        image
        type
        species
        location {
          id
          name
        }
        origin {
          id
          name
        }
        status
      }
    }
  }
`;
