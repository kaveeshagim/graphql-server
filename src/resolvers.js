import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return users.find(user => user.id == id);
    },

    // -- example query ---
    //   query {
    //     users {
    //       id
    //       name
    //       email
    //       age
    //     }
    //   }


    users: (parent, args, context, info) => {
      return users;
    }

    // -- example query ---
    // query {
    //     user(id: 1) {
    //       id
    //       name
    //       email
    //       age
    //     }
    //   }

  },





  Mutation: {
    createUser: (parent, { id, name, email, age }, context, info) => {
      const newUser = { id, name, email, age };

      users.push(newUser);

      return newUser;
    },

    // -- example query ---
    // mutation {
    //     createUser(id: 3, name: "Robert", email: "robert@gmail.com", age: 21) {
    //       id
    //       name
    //       email
    //       age
    //     }
    //   }


    updateUser: (parent, { id, name, email, age }, context, info) => {
      let newUser = users.find(user => user.id === id);

      newUser.name = name;
      newUser.email = email;
      newUser.age = age;

      return newUser;
    },

    // -- example query ---
    // mutation {
    //     updateUser(id: 3, name: "Roberto", email: "roberto@gmail.com", age: 21) {
    //       id
    //       name
    //       email
    //       age
    //     }
    //   }


    deleteUser: (parent, { id }, context, info) => {
      const userIndex = users.findIndex(user => user.id === id);

      if (userIndex === -1) throw new Error("User not found.");

      const deletedUsers = users.splice(userIndex, 1);

      return deletedUsers[0];
    }

    // -- example query ---
    // mutation {
    //     deleteUser(id: 3) {
    //       id
    //       name
    //       email
    //       age
    //     }
    //   }


  }

};

export default resolvers;