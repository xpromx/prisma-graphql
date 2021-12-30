import { db } from "../../../utils/database"

export const getUsers = () => {
    return db.user.findMany()
}