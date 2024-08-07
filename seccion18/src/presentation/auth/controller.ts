import { Request, Response } from "express";

export class AuthController {
    constructor(){}

    public loginUser = (req : Request, res : Response) => {
        res.json('loginUser')
    }

    public registerUser = (req : Request, res : Response) => {
        res.json('registerUser')
    }

    public validateEmail = (req : Request, res : Response) => {
        res.json('validateEmail')
    }
}