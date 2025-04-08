import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EditCustomerComponent} from './edit-customer/edit-customer.component';
import{DeleteCustomerComponent} from './delete-customer/delete-customer.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';


const routes: Routes = [
  {path:"update/:id",component:EditCustomerComponent},
  {path:"delete/:id",component:DeleteCustomerComponent},
  {path:"",component:CustomerGridComponent},
  {path:"create",component:CreateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
