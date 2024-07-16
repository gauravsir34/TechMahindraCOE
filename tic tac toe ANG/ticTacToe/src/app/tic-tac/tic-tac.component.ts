import { Component } from '@angular/core';
import { json } from 'stream/consumers';
import { OnChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac',
  templateUrl: './tic-tac.component.html',
  styleUrl: './tic-tac.component.css'
})
export class TicTacComponent implements OnInit {

  ngOnInit(): void {
      let allcells=localStorage.getItem("allCellKey");
      this.cells=allcells?JSON.parse(allcells):Array(10).fill(null);
      let allmovesstr=localStorage.getItem("allMovesKey");
      this.allMoves=allmovesstr?JSON.parse(allmovesstr):[];
  }

allMoves:string[]=[];
wingridcomb:number[]=[];
name:number=0;
  
  playerA:Player=new Player("PlayerA","X",true,false);
  playerB:Player=new Player("PlayerB","0",false,false);

cells:string[]=Array(10).fill(null);


updatePlayerName(playerLabel:string)
{
if(playerLabel==='A'){this.playerA.isEditing=!this.playerA.isEditing;}

if(playerLabel==='B'){this.playerB.isEditing=!this.playerB.isEditing;}
}

gameStatus:string="gameActive";

makeMove(index:number){
  const player=this.playerA.isTurn?this.playerA:this.playerB;
  if(this.cells[index]===null){this.cells[index]=player.symbol;
    this.name=this.name+1;
    localStorage.setItem("allCellKey",JSON.stringify(this.cells));
    localStorage.setItem("allMovesKey",JSON.stringify(this.allMoves));

    this.checkGameState();
  this.playerA.isTurn=!this.playerA.isTurn;
  this.playerB.isTurn=!this.playerB.isTurn;
  this.allMoves.push(player.name+ " plays" +player.symbol+" at"+ index);
  } 
}

restartbuttonclick(){
  this.cells=Array(10).fill(null);
  this.allMoves=[];
  this.wingridcomb=[];
  this.playerA.isTurn=true;
  this.playerB.isTurn=false; 
  
}

checkGameState(){
  const wincombination=[
    [1,2,3] , [4,5,6] , [7,8,9] , [1,4,7], [2,5,8],[3,6,9],[ 1,5,9], [3,5,7]

  ];
 

  const player=this.playerA.isTurn?this.playerA:this.playerB;

  for(let comb of wincombination){
    let [a,b,c]=comb;
    if(this.cells[a]==this.cells[b] && this.cells[a]== this.cells[c] && this.cells[a]==player.symbol){
      this.wingridcomb=comb;
      console.log(this.wingridcomb);
        this.gameStatus=player.name+ "WIN@";
       
        return ;
    }
  }

 if(this.name==9) this.gameStatus="GAME DRAWN";
}

}

class Player
{
  name:string;
  symbol:string;
  isTurn:boolean;
  isEditing:boolean;

  constructor(name:string,symbol:string,isTurn:boolean,isEditing:boolean)
  {
    this.name=name;
    this.symbol=symbol;
    this.isEditing=isEditing;
    this.isTurn=isTurn;

  }
}

