import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './widgets/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent,FormsModule]
})
export class SharedModule { }
