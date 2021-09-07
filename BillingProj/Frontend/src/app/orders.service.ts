
import { HttpBackend, HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { orderDetails } from './orderDetails.model';
@Injectable({
  providedIn: 'root'
})



export class OrdersService {
 // URL which returns list of JSON items (API end-point URL)
 private readonly URL = 'http://localhost:3000/getBills';

 constructor(private http: HttpClient,
  public orderDetails:orderDetails) { }
data: any;
 // create a method named: resolveItems()
 // this method returns list-of-items in form of Observable
 // every HTTTP call returns Observable object
 RunningState = new BehaviorSubject<any>(null);
 resolveItems() {
   console.log('Request is sent!');
   // this.http is a HttpClient library provide by @angular/common
   // we are calling .get() method over this.http object
   // this .get() method takes URL to call API
   let a = this.http.get(this.URL).subscribe(
    (newMagazine)=>{
 //this.orderDetails=newMagazine;
           this.data= newMagazine;
 
     }); 
     //return "a";
     return a;
  console.log("response",a);
   //return data;
 }

}
