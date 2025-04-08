import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteCustomerService {
  url:any="https://getinvoices.azurewebsites.net/api/Customer";
  constructor(private http:HttpClient) {

  }
  getCurrentData(id:any){
    return this.http.get(`${this.url}/${id}`);

  }
  deleteCustomer(id:any)
  {
      return this.http.delete(`${this.url}/${id}`);
  }
}
