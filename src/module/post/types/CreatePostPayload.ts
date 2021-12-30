import { Field, ObjectType } from "type-graphql";
import { Post } from "./Post";

@ObjectType()
export class CreatePostPayload {
  @Field(() => Post)
  post: Post;
}