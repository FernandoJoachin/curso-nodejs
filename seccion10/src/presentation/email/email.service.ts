import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface SendMailOptions {
    to : string | string[];
    subject : string;
    htmlBody : string;
    attachments? : Attachment[];
}

interface Attachment {
    filename : string;
    path : string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
          user: envs.MAILER_EMAIL,
          pass: envs.MAILER_SECRET_KEY,
        }
    });

    constructor(){}

    async sendEmail(options : SendMailOptions) : Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            });

            console.log(sentInformation);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'Logs del sistema';
        const htmlBody = `
            <h3>Log del sistema - NOC</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae excepturi quia accusamus optio magni, perspiciatis, sapiente consectetur nemo quidem non nostrum temporibus incidunt. Aliquid, quia non dolorum atque dolorem est?</p>
            <p>Ver los logs adjuntos</p>

        `;

        const attachments : Attachment[] = [
            { filename: 'logs-low.log', path: './logs/logs-low.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
        ];
      
        return this.sendEmail({ to, subject, htmlBody, attachments });
    }
}