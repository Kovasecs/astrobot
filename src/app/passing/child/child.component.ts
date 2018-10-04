import { Component, OnInit,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
@Input() child:{futbols: Array<Boolean>,name:string,id:number};
@Output() emitPass: EventEmitter<number> = new EventEmitter<number>();
@Input() datoUno:number;
@Input() datoDos:number;
// @Output() resultadoUno:number;
// @Output() resultadoDos:number;
  constructor() { }

  ngOnInit() {
  }
passBall(){
  this.emitPass.emit(this.child.id);
}

}
