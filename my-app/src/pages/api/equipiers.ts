import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "@/library/connect"
import Equipiers from "@/models/equipiers"
import mongoose from "mongoose"

export default async function (req: NextApiRequest, res: NextApiResponse) {
    connectMongo()

    // const changeStream = Equipiers.watch();
    // changeStream.on("change", (data) => {
    //     console.log(data);
    // });

    if (req.method === "GET") {
        try {
            const equipiers = await Equipiers.find()
            res.status(200).json(equipiers)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    } else if (req.method === "POST") {
        const equipier = new Equipiers({ ...req.body })
        try {
            await equipier.save()
            res.status(201).json({ message: "Nom enregistré" })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}
