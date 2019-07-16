import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit{
  
  
  @Input() account: {name: string, status: string};
  @Output() statusChanged = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    console.log("Account Component Initialized")
  }

  onSetTo(status: string) {
    this.statusChanged.emit(status);
    this.loggingService.logStatusChange(status);
    console.log("Name: " + this.loggingService.name);
    this.loggingService.name = "hello";
    // behaviour to check if logging service is singleton or not, so it is exactly not singleton, but it one object per one object of AccountComponent,
    // so basically there are three objects of Logging Service since there are three objects of AccountComponent, when the application first starts up
  }
}
