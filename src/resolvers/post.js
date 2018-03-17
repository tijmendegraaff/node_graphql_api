export default {
  Query: {
    getPost: (parent, { postId }, { models }) => models.Post.findOne({ where: { id: postId } }),
    // allUsers: (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    createPost: async (parent, args, { models, user }) => {
      try {
        const post = await models.Post.create({ ...args, userId: user.id });
        return post;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
