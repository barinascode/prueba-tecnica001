import {gql} from 'apollo-boost'

export const REPOSITORY_QUERY =  gql`{
    viewer {
        repositories(first: 100) {
        totalCount
            nodes {
                id
                nameWithOwner,
                name
                mirrorUrl,
                owner {
                    avatarUrl,
                    login
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
}`