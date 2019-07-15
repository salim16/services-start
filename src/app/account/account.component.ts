import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Output() statusChanged = new EventEmitter<string>();


  onSetTo(status: string) {
    this.statusChanged.emit(status);
    console.log('A server status changed, new status: ' + status);
  }
}
