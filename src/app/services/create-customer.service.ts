import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateCustomerService {

  url:any="https://getinvoices.azurewebsites.net/api/Customer"
  constructor(private http:HttpClient) {
  }
  sendData(formData:any):Observable<any>{
    return this.http.post(this.url,formData);

  }
}
