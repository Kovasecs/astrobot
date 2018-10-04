import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
@Input() PData: number;
@Output() childEvent = new EventEmitter();

   onChange(value){
     this.childEvent.emit(value);
   }

  ngOnInit() {
  }

}
