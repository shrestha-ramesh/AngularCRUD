import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Array-CURD Application';
  msg: any="";
  model1: any={};
  model2: any={};

  products =[
    {name: "Rice", qty: "25", price: "1300"},
    {name: "Soap", qty: "1", price: "130"},
    {name: "Oil", qty: "1L", price: "120"}
  ];
  addProduct(){
    this.products.push(this.model1);
    this.model1={};
    this.msg="Record is successfully added.......";
  }
  clickMe(){
    this.msg= "";
  }
}
