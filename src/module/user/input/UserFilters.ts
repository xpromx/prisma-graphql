import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UserFilters {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => [Int], { nullable: true })
  userIds?: number[];

  @Field({ nullable: true })
  hasPosts?: boolean;

  @Field(() => [Int], { nullable: true })
  postIds?: number[];
}
