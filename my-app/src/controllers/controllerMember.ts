import Equipiers from "@/models/equipiers"
import { NextApiRequest, NextApiResponse } from "next"

export async function getMembers(res: NextApiResponse): Promise<void> {
    try {
        const equipiers = await Equipiers.find()
        res.status(200).json(equipiers)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export async function addMember(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const equipier = new Equipiers({ ...req.body })
        await equipier.save()
        res.status(201).json({ message: "Nom enregistré" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export async function deleteOneMember(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        console.log({ _id: req.query.id })

        const data = await Equipiers.deleteOne({ _id: req.query.id })
        res.status(200).json({ message: "Nom supprimé" })
        console.log(data)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export async function updateOneMember(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const data = await Equipiers.updateOne({ _id: req.query.id }, { ...req.body, _id: req.query.id })
        console.log(data)
        res.status(200).json({ message: "Nom mis à jour !" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
