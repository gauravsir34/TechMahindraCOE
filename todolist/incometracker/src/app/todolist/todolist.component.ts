import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
//    taskTitle:string="";
//    taskDate:Date=new Date();
//    allTask:Task[]=[];
//   createTask()
//   {
//     let task:Task=
//     {
//       id:this.getRandomTaskId(),
//       title:this.taskTitle,
//       date:this.taskDate
//     };
//     this.allTask.push(task);
//     localStorage.setItem("allTaskStore",JSON.stringify(this.allTask));
//     console.log(this.allTask);
//     this.taskTitle="";
//     this.taskDate=new Date();
//   }
//   deleteTask(index:number )
//   {
//     this.allTask.splice(index,1);
//     localStorage.setItem("allTaskStore",JSON.stringify(this.allTask));
//   }
//   getRandomTaskId():string
//   {

//     const characterSet='123456789123456789123456789123456789';
//     let result='';
//     for(let i=1;i<6;i++){
//       result=result+characterSet.charAt(Math.floor(Math.random()*35));

//     }
//     return result;
//   }
// }



// interface Task
// {
//   id:string,
//   title:string,
//   date:Date
// }



taskTitle:string="";
taskDate:Date=new Date();
amount:number=0;
type: 'income' | 'expense' = 'expense';
allTask:Task[]=[];
totalamount=0;
createTask()
{
 let task:Task=
 {
   id:this.getRandomTaskId(),
   title:this.taskTitle,
   date:this.taskDate,
   type:this.type,
   amount:this.amount
 };
 this.allTask.push(task);
 if(this.type=='expense') this.totalamount-=this.amount;
 if(this.type=='income') this.totalamount+=this.amount;
 localStorage.setItem("allTaskStore",JSON.stringify(this.allTask));
 console.log(this.allTask);
 this.taskTitle="";
 this.taskDate=new Date();
 this.amount=0;
}
//  deleteTask(index:number )
//  {
//    this.allTask.splice(index,1);
//    localStorage.setItem("allTaskStore",JSON.stringify(this.allTask));
//  }
getRandomTaskId():string
{

 const characterSet='123456789123456789123456789123456789';
 let result='';
 for(let i=1;i<6;i++){
   result=result+characterSet.charAt(Math.floor(Math.random()*35));

 }
 return result;
}
}

interface Task
{
id:string,
title:string,
date:Date,
type: 'income' | 'expense',
amount:number;
}