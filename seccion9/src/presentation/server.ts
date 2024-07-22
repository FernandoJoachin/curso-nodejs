import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";

const FileSystemLogRepositroy = new LogRepositoryImpl(new FileSystemDatasource())

export class Server {
    public static start(){
        console.log('Server started...');

        CronService.createJob(
            '*/5 * * * * *', // cronTime
            function () {
                const url : string = 'https://google.com';
                new CheckService(
                    FileSystemLogRepositroy,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).execute(url);
            }, // onTick
        );
    }
}