import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{ CreateCustomerService} from '../services/create-customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  @Input() item=false;
  @Output() updateDataEvent=new EventEmitter<boolean>();
  constructor(private createCustService:CreateCustomerService,private router:Router) {
  }
  formData:any={firstname:'',lastname:'',email:'',phone_Number:'',country_code:'',gender:'',balance:''};
  public message:string;
  public flag:boolean;
  ngOnInit(): void {
  }
  createConsumer()
  {
      this.createCustService.sendData(this.formData).subscribe(response=>{
        this.message="Data saved successfully"
        alert(this.message.toLowerCase());

      },(err)=>{
        this.message=err.message
        alert(this.message.toLowerCase());

      }
      );
      this.router.navigate(['']);
  }
}
