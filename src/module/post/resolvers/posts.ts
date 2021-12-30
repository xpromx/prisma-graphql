import { Resolver, Query } from "type-graphql";
import { getPosts } from "../jobs/getPosts";
import { Post } from "../types/Post";

@Resolver()
export class PostsResolver {
  @Query(() => [Post])
  async posts() {
    return getPosts();
  }
}
