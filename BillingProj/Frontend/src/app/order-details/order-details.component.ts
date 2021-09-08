import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';


interface Metadata {
  Id: number,
  Bill_no: number,
  Date: Date,
  
}
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})

export class OrderDetailsComponent implements OnInit {
  //displayedColumns = [];
  displayedColumns= ['Id','Bill_no','Date'];
  //columnsData: Metadata[];
  // @ViewChild(MatPaginator, { static: false })
  // @ViewChild(MatSort, { static: false })
  
  constructor(private http:HttpClient){

  }
  dataSource:any;
  
  ngOnInit(): void {
   
    this.getOrderDetails();
    
  }
 
  getOrderDetails(){
    this.http.get<any>('http://localhost:3000/getBills').subscribe(data => {
     console.log("test",data);
     if(data.body != null){
     // this.columnsData = data.recordset;
      this.dataSource = new MatTableDataSource(data.recordset);

     }
  })
  }
}
