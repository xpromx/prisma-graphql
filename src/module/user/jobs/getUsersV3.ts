import { Prisma } from "@prisma/client";
import { db } from "../../../utils/database";
import { UserFilters } from "../input/UserFilters";
import { QueryBuilder } from "../../../utils/QueryBuilder";

export const getUsers = (first: number, filters: UserFilters) => {
  const query = QueryBuilder();
  query.select("User.*");
  query.from("User");

  if (filters.email) {
    query.where(`User.email = '${filters.email}'`);
  }

  if (filters.name) {
    query.where(`User.name LIKE '%${filters.name}%'`);
  }

  if (filters.userIds) {
    query.where(`User.id IN (${filters.userIds.join(",")})`);
  }

  if (filters.postIds) {
    query.join("LEFT JOIN Post ON (Post.authorId = User.id)");
    query.where(`Post.id IN (${filters.postIds.join(",")})`);
  }

  if (filters.hasPosts) {
    // query.include({ posts: true });
  }

  return db.$queryRawUnsafe(query.getSQL());
};
