const NEW_USER = 'NEW_USER'

const resolvers = {
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_USER)
    }
  },
  User: {
    firstLetterOfUsername: parent =>
      parent.username ? parent.username[0] : null
  },
  Query: {
    hello: (_, { name }) => {
      const converName = name.toLocaleUpperCase()
      return {
        saludar: `${converName} hello bro!, welcome to acid world`
      }
    },
    user: () => ({
      id: 1,
      username: 'ALAN'
    })
  },
  Mutation: {
    login: async (parent, { userInfo: { username } }, context) => username,
    register: (_, { userInfo: { username } }, { pubsub }) => {
      const user = {
        id: 1,
        username
      }

      pubsub.publish(NEW_USER, {
        newUser: user
      })

      return {
        errors: [
          {
            field: 'username',
            message: 'bad'
          },
          {
            field: 'username2',
            message: 'bad2'
          }
        ],
        user
      }
    }
  }
}

module.exports = {
  resolvers
}
