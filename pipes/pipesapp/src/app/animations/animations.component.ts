import { Component } from '@angular/core';
import  { style,state,transition,animate,trigger } from  '@angular/animations'

const fadeinfadeout=trigger('fadeInOut',[

  state('open',style({
    opacity:1
  })),

  state('close',style({
    opacity:0
  })),
  transition('open=>close',animate('1st ease-out')),
  transition('close=>open',animate('1st ease-out'))

]);
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.css',
  animations:[fadeinfadeout]
})
export class AnimationsComponent {
  isopen:boolean=false;

  toggleopenclose(){
    this.isopen=!this.isopen;
  }
}
