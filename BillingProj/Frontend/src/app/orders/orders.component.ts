import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource, MatTable } from '@angular/material/table';
// import { MatSort } from '@angular/material/sort';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private orderDetailsService:OrdersService) { }

  ngOnInit(): void {
   //this.orderDetailsService.getOrderDetails();
  var a= this.orderDetailsService.resolveItems();
   console.log(a,"end of code");
  }

 
}
