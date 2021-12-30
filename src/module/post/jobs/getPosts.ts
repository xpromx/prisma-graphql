import { db } from "../../../utils/database"

export const getPosts = () => {
    return db.post.findMany()
}