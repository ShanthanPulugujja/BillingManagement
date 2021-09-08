import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private http:HttpClient){

  }
  ngOnInit(){
   this.TestBed();
  }
  TestBed(){
    this.http.get<any>('http://localhost:3000/getBills').subscribe(data => {
     console.log("test",data);
     if(data.body != null){
       let e = data;


     }
  })
}
}
