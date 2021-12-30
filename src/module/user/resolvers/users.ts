import { Resolver, Query, Arg } from "type-graphql";
import { UserFilters } from "../input/UserFilters";
import { getUsers } from "../jobs/getUsers";
import { User } from "../types/User";

@Resolver()
export class UsersResolver {
  @Query(() => [User])
  async users(@Arg("first") first: number, @Arg("filters") filters: UserFilters) {
    return getUsers(first, filters);
  }
}
