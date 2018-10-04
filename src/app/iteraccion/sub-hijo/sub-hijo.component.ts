import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-hijo',
  templateUrl: './sub-hijo.component.html',
  styles: []
})
export class SubHijoComponent implements OnInit {

@Input() Data2: number;
  constructor() { }

  ngOnInit() {
  }

}
