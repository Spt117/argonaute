import User from "@/models/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextApiRequest, NextApiResponse } from "next"

export async function signUp(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            email: req.body.email,
            password: hash,
        })
        try {
            await user.save()
            res.status(201).json({ message: "Utilisateur créé !" })
        } catch (error) {
            res.status(400).json({ error: error })
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(401).json({ error: "L'identification a échoué !" })
        } else {
            try {
                const valid = await bcrypt.compare(req.body.password, user.password)
                if (!valid) {
                    res.status(401).json({ error: "L'identification a échoué !" })
                } else {
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_KEY", {
                            expiresIn: "24",
                        }),
                    })
                }
            } catch (error) {
                res.status(400).json({ error: error })
            }
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
