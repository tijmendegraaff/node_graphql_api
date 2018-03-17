export default {
  Query: {
    getUser: (parent, { userId }, { models }) => models.User.findOne({ where: { id: userId } }),
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
  },
};
