import { Component, OnInit } from '@angular/core';
import { CarsService} from '../../core/cars.service';

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
public coches;
public ganador1:boolean = false;
public ganador2:boolean = false;

  constructor(private car:CarsService) { }
  ngOnInit() {
    this.dato1 = this.child1.futbols.length;
    this.dato2 = this.child2.futbols.length;
    this.coches = this.car.getCars();
    console.log("COCHES:::",this.coches);
  }

  passBall(id:number){
    if(id==1){
      this.child1.futbols.pop();
      this.child2.futbols.push(true);
      this.dato1 = this.child1.futbols.length;
      this.dato2 = this.child2.futbols.length;
      this.howWin();
      console.log("GANADOR::",this.ganador1,this.ganador2);
    }else if(id == 2){
      this.child2.futbols.pop();
      this.child1.futbols.push(true)
      this.dato1 = this.child1.futbols.length;
      this.dato2 = this.child2.futbols.length;
      this.howWin();
      console.log("GANADOR::",this.ganador1,this.ganador2);
    }
  }
  public howWin(){
    if(this.child1.futbols.length == 0){
      this.ganador1 = true;
      
    }
    if(this.child2.futbols.length == 0){
      this.ganador2 = true
    }
  }

  ///CUANDO UNO DE LOS DOS SE QUEDE SIN BALONES SE LE DEBE ENSEÑAR UN NUEVO COMPONENTE CON EL PREMIO QUE SERA UN COCHE ELEGIDO RAMDON

}
