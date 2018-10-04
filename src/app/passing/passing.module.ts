import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassingRoutingModule } from './passing-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PremioComponent } from './premio/premio.component';

@NgModule({
  imports: [
    CommonModule,
    PassingRoutingModule
  ],
  declarations: [ParentComponent, ChildComponent, PremioComponent]
})
export class PassingModule { }
