import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "@/library/connect"
import { addMember, getMembers } from "@/controllers/controllerMember"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    connectMongo()
    if (req.method === "GET") {
        await getMembers(res)
    } else if (req.method === "POST") {
        await addMember(req, res)
    }
}
