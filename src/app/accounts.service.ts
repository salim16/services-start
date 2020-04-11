import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

// @Injectable is added when we inject once service into other
// Also when you use service injection into other service, the services should be provided in
// app level. i.e they should be provided in App Module.
// Also there is one more way to provide services, as @Injectable({providedIn: 'root'})
// It has one benefit though both are same, but this one helps in lazy loading of services
@Injectable()
// @Injectable({providedIn: 'root'})
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