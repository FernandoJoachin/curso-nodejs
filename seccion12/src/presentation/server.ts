import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";

const logRepository = new LogRepositoryImpl(
    //new FileSystemDatasource()
    //new MongoLogDatasource()
    new PostgresLogDatasource()
);


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);

const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
);


const emailService = new EmailService();

export class Server {
    public static start(){
        console.log('Server started...');

        new SendEmailLogs(emailService, fsLogRepository).execute('fernando.joachin.prieto@loopcrack.com');

/*         emailService.sendEmail({
            to: 'fernando.joachin.prieto@loopcrack.com',
            subject: 'Logs del sistema',
            htmlBody: `
                <h3>Log del sistema - NOC</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae excepturi quia accusamus optio magni, perspiciatis, sapiente consectetur nemo quidem non nostrum temporibus incidunt. Aliquid, quia non dolorum atque dolorem est?</p>
                <p>Ver los logs adjuntos</p>

            `,
        }) */

        //emailService.sendEmailWithFileSystemLogs('fernando.joachin.prieto@loopcrack.com');


        //CronService.createJob(
        //    '*/5 * * * * *', 
        //    function () {
        //        const url : string = 'https://google.com';
        //        new CheckServiceMultiple(
        //            [fsLogRepository, mongoLogRepository, postgresLogRepository],
        //           () => console.log(`${url} is ok`),
        //            (error) => console.log(error)
        //        ).execute(url);
        //    }, 
        //);

    }
}