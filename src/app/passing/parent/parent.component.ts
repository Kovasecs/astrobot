import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {
child1: {futbols: Array<boolean>,name:string, id:number} = {
  futbols:[true,true,true,true,true],
  name:'Child 1',
  id:1
};
child2: {futbols: Array<boolean>,name:string, id:number} = {
  futbols:[true,true,true,true,true],
  name:'Child 2',
  id:2
};
public dato1:number;
public dato2:number;
public resulUno:number;
public resulDos:number;

/// MAÑANA INTENTAR CONTAR CUANTOS HAY EN EL PADRE Y EN EL HIJO
  constructor() { }

  ngOnInit() {
    this.dato1 = this.child1.futbols.length;
    this.dato2 = this.child2.futbols.length;
  }

  passBall(id:number){
    if(id==1){
      this.child1.futbols.pop();
      this.child2.futbols.push(true);
      this.dato1 = this.child1.futbols.length;
      this.dato2 = this.child2.futbols.length;
    }else if(id == 2){
      this.child2.futbols.pop();
      this.child1.futbols.push(true)
       this.dato1 = this.child1.futbols.length;
       this.dato2 = this.child2.futbols.length;
    }
  }

}
