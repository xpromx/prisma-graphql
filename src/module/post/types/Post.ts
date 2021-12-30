import "reflect-metadata";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { db } from "../../../utils/database";
import { User } from "../../user/types/User";

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: number;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;

  @Field()
  title: string;

  @Field((type) => String, { nullable: true })
  content: string | null;

  @Field((type) => Boolean, { nullable: true })
  published?: boolean | null;

  @Field((type) => Int)
  viewCount: number;

  authorId: number;

  @Field(() => User)
  async user() {
    return db.user.findUnique({ where: { id: this.authorId } });
  }
}
