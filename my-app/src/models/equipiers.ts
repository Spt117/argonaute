import { Schema, model, models } from "mongoose"

const equipiersShema = new Schema({
    name: { type: String, required: true },
})

const Equipiers = models.equipiers || model("equipiers", equipiersShema)

export default Equipiers
