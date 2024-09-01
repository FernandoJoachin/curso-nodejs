import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";

const FileSystemLogRepositroy = new LogRepositoryImpl(new FileSystemDatasource());
const emailService = new EmailService();

export class Server {
    public static start(){
        console.log('Server started...');

        new SendEmailLogs(emailService, FileSystemLogRepositroy).execute('fernando.joachin.prieto@loopcrack.com');

/*         emailService.sendEmail({
            to: 'fernando.joachin.prieto@loopcrack.com',
            subject: 'Logs del sistema',
            htmlBody: `
                <h3>Log del sistema - NOC</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae excepturi quia accusamus optio magni, perspiciatis, sapiente consectetur nemo quidem non nostrum temporibus incidunt. Aliquid, quia non dolorum atque dolorem est?</p>
                <p>Ver los logs adjuntos</p>

            `,
        }) */

        /* emailService.sendEmailWithFileSystemLogs('fernando.joachin.prieto@loopcrack.com') */
        //CronService.createJob(
        //    '*/5 * * * * *', 
        //    function () {
        //        const url : string = 'https://google.com';
        //        new CheckService(
        //            FileSystemLogRepositroy,
        //           () => console.log(`${url} is ok`),
        //            (error) => console.log(error)
        //        ).execute(url);
        //    }, 
        //);

    }
}