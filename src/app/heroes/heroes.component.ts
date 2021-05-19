import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../service-demo.service';

@Component({
  selector: '.app-heroes',
  template: `
  
  <!-- <h2> {{"welcome "+name}}</h2>
  <h2> {{"your name length is "+name.length}}</h2>
  <h2> {{"your name in uppercase looks as " + name.toUpperCase()}}</h2>
  <h2> {{name.toLocaleUpperCase()}}</h2>
  <h2 class="text-success">hdllo</h2>
  <h2 [class]="suc">hdllo</h2>
  <h2 [style.color]="'orange'">hdllo</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">hdllo</h2>
  <h2 [ngClass]="suc">hdllo</h2> -->
  <h2>{{ name | lowercase}}</h2>
  <h2>{{ name | uppercase}}</h2>
  <h2>{{ name | titlecase}}</h2>
  <h2>{{ name | slice:3:5}}</h2>
  <h2>{{ name | lowercase}}</h2>
  <h2>{{ person | json}}</h2>

  <!-- piping in numbers -->

  <h2> {{5.678 | number:'1.1-2'}}</h2>
  <h2> {{5.678 | number:'3.2-4'}}</h2>
  <h2> {{5.678 | percent}}</h2>
  <h2> {{5.678 | currency:'INR' }}</h2>
  <h2> {{5.678 | currency:'INR':'code' }}</h2>


  <!-- date piping  -->

  <h2> {{date}}</h2>
  <h2> {{date | date:'short'}}</h2>
  <h2> {{date  | date:'shortDate'}}</h2>

  <!-- pipes changes the data only for views  -->

<div *ngFor="let e of emp; index as i">
 <div> {{i+" "}}{{e | json}}</div>
</div>


  
  

  {{1 +89}}

<input type="text" [id]="myid" value="Shaym">

  `,
  styles: [`input{border: 1px solid black;}
  .text-success{
    color:red
    
  }
  
  
  `]
})
export class HeroesComponent implements OnInit {
public name="vishwas";
public myid="meraId";
public suc="text-success";
public hasError= true;
public date = new Date();

public person={ "name":"sachin","age":"21"}
  constructor(private _employeeService: ServiceDemoService) { 
    this.emp=this._employeeService.getEmployees();
  }

  ngOnInit(): void {
  }
  greetUser(){
    return "hello user "+this.name;
  }
  public emp=[];



}
