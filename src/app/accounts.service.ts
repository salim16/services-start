import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {
    
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    
      createAccount(newAccount: {name: string, status: string}) {
        this.loggingService.logStatusChange(newAccount.status);
        this.accounts.push(newAccount);
      }
    
      changeStatus(i: number, updatedStatus: string) {
        this.loggingService.logStatusChange(updatedStatus);
        this.accounts[i].status = updatedStatus;
      }

}