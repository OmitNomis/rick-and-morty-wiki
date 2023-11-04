import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query GetAllEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
      }
    }
  }
`;
