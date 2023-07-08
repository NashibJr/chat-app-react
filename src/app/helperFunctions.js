import { CometChat } from "@cometchat-pro/chat";

const helperFunctions = {
  getUsers: async () => {
    try {
      const userRequest = new CometChat.UsersRequestBuilder()
        .setLimit(30)
        .build();
      let cometchatUsers = await userRequest.fetchNext();
      cometchatUsers = cometchatUsers.map((user) => ({
        ...user,
        handle: `@${user.name.toLowerCase().split(" ")[0]}`,
      }));
      return cometchatUsers;
    } catch (error) {
      console.log(error);
    }
  },
};

export default helperFunctions;
