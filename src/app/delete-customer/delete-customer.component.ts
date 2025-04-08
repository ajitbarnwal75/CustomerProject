import { Component, OnInit } from '@angular/core';
import{ DeleteCustomerService} from '../services/delete-customer.service'
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  formData:any={firstname:'',lastname:'',email:'',phone_Number:'',country_code:'',gender:'',balance:''};
  message:any;
  constructor(private data:DeleteCustomerService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.data.getCurrentData(this.route.snapshot.params.id).subscribe(response=>
      {
        //console.log("Data sent successfully",response)
        this.formData.firstname=response["firstname"];
        this.formData.lastname=response["lastname"];
        this.formData.email=response["email"];
        this.formData.country_code=response["country_code"];
        this.formData.balance=response["balance"];
        this.formData.phone_Number=response["phone_Number"];
        this.formData.gender=response["gender"];

      });
  }
  deleteCustomer()
  {
    this.data.deleteCustomer(this.route.snapshot.params.id).subscribe(response=>
      {
        this.message="Data deleted successfully!";
        alert(this.message.toLowerCase());
      },(err)=>{
        this.message=err.message;
        alert(this.message.toLowerCase());
      });
      this.router.navigate(['']);
  }
}
