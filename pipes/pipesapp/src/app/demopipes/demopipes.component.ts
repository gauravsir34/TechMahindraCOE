import { Component } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrl: './demopipes.component.css'
})
export class DemopipesComponent {
  today:number=Date.now();
  text:string="gaurav shukla";
  amount:number=111.111;
  percentage:number=0.45;
}
