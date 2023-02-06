import { userSchema } from "@/library/interfaces"
import { Schema, model, models } from "mongoose"

const userSchema = new Schema<userSchema>({
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const User = models.user || model("user", userSchema)

export default User
