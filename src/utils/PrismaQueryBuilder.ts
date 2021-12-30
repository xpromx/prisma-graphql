interface QueryBuilder {
  where?: Record<string, unknown> | null | undefined;
  include?: Record<string, unknown> | null | undefined;
}
export const PrismaQueryBuilder = <T extends QueryBuilder>() => {
  let conditions: T;

  return {
    where: (where: T["where"]) => {
      conditions.where = { ...conditions.where, where };
    },
    include: (include: T["include"]) => {
      conditions.where = { ...conditions.include, include };
    },
    conditions: () => {
      return conditions;
    },
  };
};
