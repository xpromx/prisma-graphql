import { Prisma } from "@prisma/client";
import { db } from "../../../utils/database";
import { UserFilters } from "../input/UserFilters";
import { PrismaQueryBuilder } from "../../../utils/PrismaQueryBuilder";

interface Conditions extends Prisma.UserFindManyArgs {
  where: NonNullable<Prisma.UserFindManyArgs["where"]>;
  include: Prisma.UserFindManyArgs["include"];
}

export const getUsers = (first: number, filters: UserFilters) => {
  const query = PrismaQueryBuilder<Prisma.UserFindManyArgs>();
  if (filters.email) {
    query.where({ email: { equals: filters.email } });
  }

  if (filters.name) {
    query.where({ name: { contains: filters.name } });
  }

  if (filters.userIds) {
    query.where({ id: { in: filters.userIds } });
  }

  if (filters.postIds) {
    query.where({
      posts: {
        some: { id: { in: filters.postIds } },
      },
    });
  }

  if (filters.hasPosts) {
    query.include({ posts: true });
  }

  return db.user.findMany({
    ...query.conditions(),
    orderBy: { id: "desc" },
    take: first,
  });
};
