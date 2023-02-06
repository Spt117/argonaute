import express from "express"
import mongoose from "mongoose"

const Equipier = require("./Models/equipiers")
mongoose
    .connect("mongodb+srv://root:root@cluster0.z0af0of.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"))

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
    next()
})

app.post("/api/equipiers", (req, res) => {
    const equipier = new Equipier({ ...req.body })
    equipier
        .save()
        .then(() => res.status(201).json({ message: "Objet enregistré" }))
        .catch((error) => res.status(400).json({ error: error }))
})

app.use("/api/equipiers", async (req, res) => {
    const equipiers = await Equipier.find()
    res.json(equipiers)
})

module.exports = app
