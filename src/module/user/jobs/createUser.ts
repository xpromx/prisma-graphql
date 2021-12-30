import { db } from "../../../utils/database";
import { CreateUserInput } from "../input/CreateUserInput";

export const createUser = (input: CreateUserInput) => {
  return db.user.create({ data: input });
};
