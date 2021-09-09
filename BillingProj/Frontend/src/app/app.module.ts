import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './order-details/order-details.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,

  ],
  imports: [
    BrowserModule,
   HttpClientModule,MatTableModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
