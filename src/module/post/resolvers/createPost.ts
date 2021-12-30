import { Resolver, Mutation, Arg } from "type-graphql";
import { CreatePostInput } from "../input/CreatePostInput";
import { createPost } from "../jobs/createPost";
import { CreatePostPayload } from "../types/CreatePostPayload";

@Resolver()
export class CreatePostResolver {
  @Mutation(() => CreatePostPayload)
  async createPost(@Arg("input") input: CreatePostInput) {
    const post = await createPost(input);
    return { post };
  }
}
