import { Component, OnInit,Input } from '@angular/core';
import { CustomerListServiceService } from '../services/customer-list-service.service';
@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css']
})
export class CustomerGridComponent implements OnInit {
  public getcustlst: any[]=[];
  @Input() item=false;
  constructor(private custlst:CustomerListServiceService) {
    this.getcustlst=[custlst.GetCustomerList()
      .subscribe((arg: any) =>
      this.getcustlst = arg
      )];

  }
  display = false;
  ngOnInit(): void {
  }
   sortById() {
    return this.getcustlst.sort((a: any, b: any) => {
      return <any>a.id - <any>b.id;
    });
  }
}
