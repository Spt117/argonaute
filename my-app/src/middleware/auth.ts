import jwt from "jsonwebtoken"
import { NextApiRequest, NextApiResponse } from "next"

interface DecodedToken {
    userId: string
}

interface ExtendedRequest extends NextApiRequest {
    auth?: {
        userId: string
    }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!req.headers.authorization) {
            throw new Error("Authorization header is missing")
        }
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_KEY") as DecodedToken
        if (!decodedToken.userId) {
            throw new Error("Invalid token: userId is missing")
        }
        const userId = decodedToken.userId
        // req.auth = { userId: userId } as ExtendedRequest["auth"]
        req = { ...req, auth: { userId: userId } } as ExtendedRequest
    } catch (error) {
        res.status(401).json({ error: error })
    }
}
