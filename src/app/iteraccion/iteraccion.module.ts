import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IteraccionRoutingModule } from './iteraccion-routing.module';
import { IteraccionComponent } from './iteraccion/iteraccion.component';
import { HijoComponent } from './hijo/hijo.component';
import { SubHijoComponent } from './sub-hijo/sub-hijo.component';

@NgModule({
  imports: [
    CommonModule,
    IteraccionRoutingModule,
    SharedModule
  ],
  declarations: [IteraccionComponent, HijoComponent, SubHijoComponent]
})
export class IteraccionModule { }
