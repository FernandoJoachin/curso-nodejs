import path from 'path';
import fs from 'fs';
import { UploadedFile } from 'express-fileupload';

export class FileUploadService {
    constructor(){}

    private checkFolder(folderPath : string){
        if(!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath);
        }
    }

    public async uploadSingle(
        file : UploadedFile,
        folder : string = 'uploads',
        validExtensions : string[] = ['png','gif', 'jpg','jpeg'] 
    ){
        try {
            const fileExtension = file.mimetype.split('/').at(1) ?? '';
            const destination = path.resolve(__dirname, '../../../', folder);
            this.checkFolder(destination);
            file.mv(`${destination}/mi-imagen.${fileExtension}`);
        } catch (error) {
            throw error;
        }
    }

    public uploadMultiple(
        file : UploadedFile[],
        folder : string = 'uploads',
        validExtensions : string[] = ['png','gif', 'jpg','jpeg'] 
    ){}
}