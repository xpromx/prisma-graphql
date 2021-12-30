interface QueryBuilder {
  select: string;
  where: string[];
  from: string;
  join: string[];
  orderBy: string[];
  groupBy: string[];
}

export const QueryBuilder = () => {
  let query: QueryBuilder = {
    select: "*",
    from: "",
    where: [],
    join: [],
    orderBy: [],
    groupBy: [],
  };

  return {
    select: (sql: string) => {
      query.select = sql;
    },
    from: (sql: string) => {
      query.from = sql;
    },
    where: (sql: string) => {
      query.where.push(sql);
    },
    join: (sql: string) => {
      query.join.push(sql);
    },
    orderBy: (sql: string) => {
      query.orderBy.push(sql);
    },
    groupBy: (sql: string) => {
      query.groupBy.push(sql);
    },
    getSQL: () => {
      return `SELECT ${query.select} 
              FROM ${query.from} 
              ${query.join.length > 0 ? query.join.join(" ") : ``} 
              ${
                query.where.length > 0
                  ? `WHERE ${query.where.join(" AND ")}`
                  : ``
              }
              ${
                query.groupBy.length > 0
                  ? `ORDER BY ${query.groupBy.join(",")}`
                  : ``
              }
              ${
                query.orderBy.length > 0
                  ? `ORDER BY ${query.orderBy.join(",")}`
                  : ``
              }
             `;
    },
  };
};
