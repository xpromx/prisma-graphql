import { Prisma } from "@prisma/client";
import { db } from "../../../utils/database";
import { UserFilters } from "../input/UserFilters";

type Query = Prisma.UserFindManyArgs;

const filterByEmail = (query: Query, email: string): Query => {
  return {
    ...query,
    where: {
      ...query.where,
      email: { equals: email },
    },
  };
};

const filterByName = (query: Query, name: string): Query => {
  return {
    ...query,
    where: {
      ...query.where,
      name: { contains: name },
    },
  };
};

const filterByUserIds = (query: Query, userIds: number[]): Query => {
  return {
    ...query,
    where: {
      ...query.where,
      id: { in: userIds },
    },
  };
};

const filterByPostIds = (query: Query, postIds: number[]): Query => {
  return {
    ...query,
    where: {
      ...query.where,
      posts: {
        some: { id: { in: postIds } },
      },
    },
  };
};

const filterHasPost = (query: Query): Query => {
  return {
    ...query,
    include: { posts: true },
  };
};

export const getUsers = (first: number, filters: UserFilters) => {
  let query: Query = {};

  if (filters.email) {
    query = filterByEmail(query, filters.email);
  }

  if (filters.name) {
    query = filterByName(query, filters.name);
  }

  if (filters.userIds) {
    query = filterByUserIds(query, filters.userIds);
  }

  if (filters.postIds) {
    query = filterByPostIds(query, filters.postIds);
  }

  if (filters.hasPosts) {
    query = filterHasPost(query);
  }

  return db.user.findMany({
    ...query,
    orderBy: { id: "desc" },
    take: first,
  });
};
