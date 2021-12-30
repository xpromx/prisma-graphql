import { Resolver, Query } from "type-graphql";
import { getUsers } from "../jobs/getUsers";
import { User } from "../types/User";

@Resolver()
export class UsersResolver {
  @Query(() => [User])
  async users() {
    return getUsers();
  }
}
