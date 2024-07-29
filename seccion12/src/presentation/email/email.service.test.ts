import nodemailer from 'nodemailer';
import { EmailService, SendMailOptions } from './email.service';

describe('EmailService', () => {
    const mockSendMail = jest.fn();

    // Mock al createTransport
    nodemailer.createTransport = jest.fn().mockReturnValue( {
        sendMail: mockSendMail
    });

    const emailSevice = new EmailService();

    test('should send email', async() => { 
        const options: SendMailOptions = {
            to: 'fernando.joachin.prieto@loopcrack.com',
            subject: 'Test',
            htmlBody: '<h1>Test email Service</h1>'
        };

        await emailSevice.sendEmail(options);
        expect(mockSendMail).toHaveBeenCalledWith({
            attachments: expect.any(Array),
            html: '<h1>Test email Service</h1>',
            subject: 'Test',
            to: 'fernando.joachin.prieto@loopcrack.com'
        });
    });

    test('should send email with attachements', async() => {
        const email = 'fernando.joachin.prieto@loopcrack.com';
        await emailSevice.sendEmailWithFileSystemLogs(email);

        expect(mockSendMail).toHaveBeenCalledWith({
            to: email,
            subject: "Logs del sistema",
            html: expect.any(String),
            attachments: expect.arrayContaining(
                [
                    {filename: "logs-low.log", path: "./logs/logs-low.log"}, 
                    {filename: "logs-medium.log", path: "./logs/logs-medium.log"}, 
                    {filename: "logs-high.log", path: "./logs/logs-high.log"}
                ]
            )
        });
    });
    
})