import { Component } from '@angular/core';
import { CustomerListServiceService } from './services/customer-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public getcustlst: any;
  constructor(private custlst:CustomerListServiceService,private router:Router) {
    this.getcustlst=custlst.GetCustomerList()
      .subscribe((arg: any) => this.getcustlst = arg);

  }

  title = 'CustomerApp';
  display = true;
  display1 = false;
  onPress() {
     //To toggle the component
    this.display = !this.display;
    this.display1 = false;

  }
  updateData(item:boolean)
  {
    this.display = !this.display;
    this.display1 = item;
  }
}
