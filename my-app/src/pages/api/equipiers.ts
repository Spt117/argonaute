import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/library/connect";
import Equipiers from "@/models/equipiers";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    connectMongo();

    if (req.method === "GET") {
        const equipiers = await Equipiers.find();
        res.status(200).json(equipiers);
    } else if (req.method === "POST") {
        const equipier = new Equipiers({ ...req.body });
        await equipier
            .save()
            .then(() => res.status(201).json({ message: "Objet enregistré" }))
            .catch((error: any) => res.status(500).json({ error: error }));
    }
}
