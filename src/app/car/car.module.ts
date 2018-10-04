import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car/car.component';
import { EngineService } from './engine.service';
import { IndicatorComponent } from './indicator/indicator.component';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule
  ],
  declarations: [CarComponent, IndicatorComponent],
  providers:[EngineService]
})
export class CarModule { }
