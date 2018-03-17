export default `
    type User {
        id: ID!
        username: String!
        email: String!
        posts: [Post]
    }

    type Query {
        allUsers: [User!]!
        getUser(userId: Int!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User!
    }
`;
