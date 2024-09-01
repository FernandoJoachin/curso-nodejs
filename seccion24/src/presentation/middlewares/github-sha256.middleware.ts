import { NextFunction, Request, Response } from "express";
import { envs } from "../../config";
import * as crypto from "crypto";

let encoder = new TextEncoder();

async function verify_signature(secret : string, header : string, payload : string) : Promise<boolean> {
    let parts = header.split("=");
    if (parts.length !== 2 || parts[0] !== "sha256") {
        return false;
    }
    let sigHex = parts[1];

    let algorithm = { name: "HMAC", hash: { name: 'SHA-256' } };

    let keyBytes = encoder.encode(secret);
    let extractable = false;
    let key = await crypto.subtle.importKey(
        "raw",
        keyBytes,
        algorithm,
        extractable,
        [ "sign", "verify" ],
    );

    let sigBytes = hexToBytes(sigHex);
    let dataBytes = encoder.encode(payload);
    let equal = await crypto.subtle.verify(
        algorithm.name,
        key,
        sigBytes,
        dataBytes,
    );

    return equal;
}

function hexToBytes(hex : string) : Uint8Array {
    let len = hex.length / 2;
    let bytes = new Uint8Array(len);

    let index = 0;
    for (let i = 0; i < hex.length; i += 2) {
        let c = hex.slice(i, i + 2);
        let b = parseInt(c, 16);
        bytes[index] = b;
        index += 1;
    }

    return bytes;
}

export class GithubSha256Middleware {
    public static verifySignature = async(req : Request, res : Response, next : NextFunction ) => {
        const xHubSignature = req.header("x-hub-signature-256") ?? '';  
        const signature = xHubSignature;
        if(!(await verify_signature(envs.SECRET_TOKEN, signature, JSON.stringify(req.body)))){
            res.status(401).send("Unauthorized");
            return;
        }
    
        next();
      }
}