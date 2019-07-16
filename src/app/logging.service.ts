export class LoggingService {

    name: string = 'salim';

    logStatusChange(accountStatus: string) {
        console.log('A server status changed, new status: ' + accountStatus);
    }
}