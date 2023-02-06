import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "@/library/connect"
import { deleteOneMember, updateOneMember } from "@/controllers/controllerMember"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    connectMongo()
    if (req.method === "DELETE") {
        await deleteOneMember(req, res)
    } else if (req.method === "PUT") {
        await updateOneMember(req, res)
    }
}
