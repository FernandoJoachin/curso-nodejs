import { LogEntity } from "../../entities/log.entity";
import { SendEmailLogs } from "./send-email-logs";

describe('SendEmailLogs', () => {
    const mockEmailService = {
        sendEmailWithFileSystemLogs : jest.fn().mockReturnValue(true)
    };

    const mockRepository = {
        saveLog : jest.fn(),
        getLogs : jest.fn() 
    }

    const sendEmailLogs = new SendEmailLogs(mockEmailService as any, mockRepository);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should call sendEmail and saveLog', async() => {
        const result = await sendEmailLogs.execute('fernando.joachin.prieto@loopcrack.com');
        expect(result).toBe(true);
        expect(mockEmailService.sendEmailWithFileSystemLogs).toBeCalledTimes(1);
        expect(mockRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
        expect( mockRepository.saveLog ).toBeCalledWith({
            createdAt: expect.any( Date ),
            level: "low",
            message: "Log email sent",
            origin: "send-email-logs.ts",
        });
    });

    test('should log in case of error', async() => {
        mockEmailService.sendEmailWithFileSystemLogs.mockResolvedValue(false);
        const result = await sendEmailLogs.execute('fernando.joachin.prieto@loopcrack.com');
        expect(result).toBe(false);
        expect(mockEmailService.sendEmailWithFileSystemLogs).toBeCalledTimes(1);
        expect(mockRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
        expect( mockRepository.saveLog ).toBeCalledWith({
            createdAt: expect.any( Date ),
            level: "high",
            message: "Error: Email log not sent",
            origin: "send-email-logs.ts",
        });
    });
})