import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { FileUploadService } from "../services";
import { UploadedFile } from "express-fileupload";
import { error } from "console";

export class FileUploadController {
    constructor(
        private readonly fileUploadService : FileUploadService
    ){}

    private handleError = (res : Response, error : unknown) => {
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({ error: error.message });
        }
      
        console.log(`${ error }`);
        return res.status(500).json({ error: 'Internal server error' });
    }

    public uploadFile = (req : Request, res : Response) => {
        const type = req.params.type;
        const file = req.body.files.at(0) as UploadedFile;

        this.fileUploadService.uploadSingle(file, `uploads/${type}`)
            .then(uploaded => res.json(uploaded))
            .catch(error => this.handleError(res, error))
    }

    public uploadMultileFiles = (req : Request, res : Response) => {
        const type = req.params.type;
        const files = req.body.files as UploadedFile[];

        this.fileUploadService.uploadMultiple(files, `uploads/${type}`)
            .then(uploaded => res.json(uploaded))
            .catch(error => this.handleError(res, error))
    }
}