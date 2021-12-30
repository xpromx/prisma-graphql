import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class CreateUserPayload {
  @Field(() => User)
  user: User;
}