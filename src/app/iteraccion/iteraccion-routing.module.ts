import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IteraccionComponent} from './iteraccion/iteraccion.component';

const routes: Routes = [
  {
    path: '',
    component: IteraccionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IteraccionRoutingModule { }
