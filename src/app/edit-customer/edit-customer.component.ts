import { Component, OnInit,Input } from '@angular/core';
import{ EditCustomerService} from '../services/edit-customer.service'
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  @Input() alteritem=false;
  @Input() id="";
  formData:any={firstname:'',lastname:'',email:'',phone_Number:'',country_code:'',gender:'',balance:''};

  constructor(private data:EditCustomerService, private route:ActivatedRoute,private router:Router) {

   }
message:any;
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
  editCustomer()
  {
    this.data.updateData(this.formData,this.formData.id).subscribe(response=>
      {
        this.message="Data updated successfully";
      alert(this.message.toLowerCase());

      },(err)=>{
        this.message=err.message;
      alert(this.message.toLowerCase());

      });
      //alert(this.message.toLowerCase());
      this.router.navigate(['']);
  }
}
