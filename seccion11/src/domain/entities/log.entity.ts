export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface LogEntityOptions {
    level : LogSeverityLevel;
    message : string;
    origin : string;
    createdAt ?: Date;
}

export class LogEntity {
    public level : LogSeverityLevel;
    public message : string;
    public origin : string;
    public createdAt : Date;

    constructor(logEntityOptions: LogEntityOptions){
        const { level, message, origin, createdAt = new Date() } = logEntityOptions;
        this.level = level;
        this.message = message;
        this.origin = origin;
        this.createdAt = createdAt;
    }

    static fromJSON = (json : string) : LogEntity => {
        json = (json === '') ? '{}' : json; 
        const { level, message, origin, createdAt } = JSON.parse(json);

        const log = new LogEntity({ level, message, origin, createdAt });
        return log;
    }

    static fromObject  = (object : { [key : string] : any}) : LogEntity => {
        const { level, message, origin, createdAt } = object;

        const log = new LogEntity({ level, message, origin, createdAt });
        return log;
    }
}