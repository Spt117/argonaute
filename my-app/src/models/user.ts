import { userSchema } from "@/library/interfaces"
import { Schema, model, models } from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new Schema<userSchema>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

userSchema.plugin(uniqueValidator)

const User = models.user || model("user", userSchema)

export default User
