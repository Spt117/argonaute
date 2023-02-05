import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "@/library/connect"
import Equipiers from "@/models/equipiers"

export default async function (req: NextApiRequest, res: NextApiResponse) {
    connectMongo()

    if (req.method === "DELETE") {
        try {
            console.log({ _id: req.query.id })

            const data = await Equipiers.deleteOne({ _id: req.query.id })
            res.status(200).json({ message: "Nom supprimé" })
            console.log(data)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    } else if (req.method === "PUT") {
        try {
            const data = await Equipiers.updateOne({ _id: req.query.id }, { ...req.body, _id: req.query.id })
            console.log(data)
            res.status(200).json({ message: "Nom mis à jour !" })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}
