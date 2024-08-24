const { userList } = require("../userList");
 
const resolvers = {
  Query: {
    users() {
        return userList;
    },
  },
};

module.exports = { resolvers };