export class LoggingService {
    logCreationAccount(account: { name: string; status: string; }) {
      console.log('A new server account has been created with name: ' + account.name + 
      ' and status: ' + account.status);
    }

    name: string = 'salim';

    logStatusChange(accountStatus: string) {
        console.log('A server status changed, new status: ' + accountStatus);
    }
}