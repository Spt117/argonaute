import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/library/connect";
import Equipiers from "@/models/equipiers";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const equipiers = await Equipiers.find();
    res.status(200).json(equipiers);
}
