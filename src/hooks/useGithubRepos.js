import { useStaticQuery, graphql } from "gatsby"

export const useGithubRepos = () => {
    return useStaticQuery(
        graphql `
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: PUSHED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  isFork
                }
              }
            }
          }
        }
      }
    `
    );
}