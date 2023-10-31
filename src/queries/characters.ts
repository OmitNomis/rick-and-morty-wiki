import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
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

export const GET_CHARACTER = gql`
  query GetSingleCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;
