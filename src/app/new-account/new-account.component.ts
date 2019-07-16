import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  ngOnInit(): void {
    console.log("New Account Component Initialized")
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.createAccount({name: accountName, status: accountStatus});
  }

    /* 
        ************************************************************** Dependency Injection in Angular **************************************************************

        It is a hierarchial Injection. Or the tree like injection.

        1) If you provide a service in AppModule, it would be available everywhere in the application.
           Only 1 instance of that service will be created and shared across all components, directives, 
           provided you do not override this behavioiur and provide it once again.
        2) If you provide a service in AppComponent,
           then one instance of that service will be present all the child components and also in all child of child components if present,  
           provided you do not override this behavioiur and provide it once again.
        3) If you provide a service in any other component, 
           then one instance of that service, per one instance of that component will be avaible to all that component and all it's child and child of childs if present.
           provided you do not override this behavioiur and provide it once again in the child component.
           This rule applies to AppComponent (one instance per one instance of AppComponent), but since we only have one instance of App component, I have not mentioned it.
    */
}
