import { getUsers } from "./getUsers";
// import { db } from "../../../utils/database";

describe("jobs/users", () => {
  it("Should return a list of users", async () => {
    // const data = [...Array(5)].map((_, i) => ({
    //   name: `user-${i}`,
    //   email: `user-${i}@gmail.com`,
    // }));
    // await db.user.createMany({ data });
    const users = await getUsers(3);
    expect(users.length).toBe(3);
  });
});
