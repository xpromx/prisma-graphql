import { gql } from "apollo-server-express";
// import { db } from "../../../utils/database";
import { setupServer } from "../../../utils/testing/graphql";

const QUERY = gql`
  query UsersQuery($first: Float!, $filters: UserFilters!) {
    users(first: $first, filters: $filters) {
      id
      name
      email
    }
  }
`;

describe("queries/users", () => {
  const { query } = setupServer();

  //   beforeAll(async () => {
  //     const data = [...Array(5)].map((_, i) => ({
  //       name: `user-query-${i}`,
  //       email: `user-query-${i}@gmail.com`,
  //     }));
  //     await db.user.createMany({ data });
  //   });

  it("Get users", async () => {
    const result = await query({
      query: QUERY,
      variables: {
        first: 3,
        filters: {},
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data.users.length).toBe(3);
  });
});
