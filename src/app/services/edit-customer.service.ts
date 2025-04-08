import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EditCustomerService {
  url:any="https://getinvoices.azurewebsites.net/api/Customer";

  constructor(private http:HttpClient) { }

  getCurrentData(id:any){
    return this.http.get(`${this.url}/${id}`);

  }

  updateData(formData:any,id:any):Observable<any>{
    return this.http.post(`${this.url}/${id}`,formData);

  }
}
