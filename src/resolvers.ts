import * as UserResolvers from "./module/user/resolvers";
import * as PostResolvers from "./module/post/resolvers";

const resolversArray: any = [];

const resolvers = {
  ...UserResolvers,
  ...PostResolvers
};

Object.values(resolvers).forEach((value) => resolversArray.push(value));

export default resolversArray;
