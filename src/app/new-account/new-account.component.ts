import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    console.log("New Account Component Initialized")
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
    console.log("asdddddddddddddddd" + this.loggingService.name);
    this.loggingService.name = "ak";  
    // behaviour to check if logging service is singleton or not, so it is exactly not singleton, but it one object per one object of NewAccountComponent
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
