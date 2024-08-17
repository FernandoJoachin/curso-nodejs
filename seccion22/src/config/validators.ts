import mongoose, { mongo } from 'mongoose';

export class Validators {
    public static isMongoID(id: string){
        return mongoose.isValidObjectId(id);
    }
}