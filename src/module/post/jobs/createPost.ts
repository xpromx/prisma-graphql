import { db } from "../../../utils/database";
import { CreatePostInput } from "../input/CreatePostInput";

export const createPost = (input: CreatePostInput) => {
  return db.post.create({ data: input });
};
