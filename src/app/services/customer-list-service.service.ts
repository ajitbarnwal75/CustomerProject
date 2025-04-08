import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomerListServiceService {
  url:string="https://getinvoices.azurewebsites.net/api/Customers";
  constructor(private http:HttpClient) {
   }

   GetCustomerList()
   {
      return this.http.get(this.url);
   }
}
