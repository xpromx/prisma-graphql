import { Resolver, Mutation, Arg } from "type-graphql";
import { CreateUserInput } from "../input/CreateUserInput";
import { createUser } from "../jobs/createUser";
import { CreateUserPayload } from "../types/CreateUserPayload";

@Resolver()
export class CreateUserResolver {
  @Mutation(() => CreateUserPayload)
  async createUser(@Arg("input") input: CreateUserInput) {
    const user = await createUser(input);
    return { user };
  }
}
