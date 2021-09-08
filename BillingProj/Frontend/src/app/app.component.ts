import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { OrderDetailsComponent } from './order-details/order-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private http:HttpClient){

  }
  ngOnInit(){
  
  }
 

}
