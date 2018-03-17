export default `
    type Post {
        id: ID!
        title: String!
        content: String!
        user: User!
    }

    type Query {
        getPost(postId: Int!): Post
    }

    type Mutation {
        createPost(title: String!, content: String!): Post!
    }
`;
