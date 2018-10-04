import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styles: []
})
export class PremioComponent implements OnInit {

@Input() resul1:boolean;
@Input() resul2:boolean;

  constructor() { }

  ngOnInit() {
  }

}
