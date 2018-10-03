import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent } from './about/about.component';
import { LinksComponent } from './about/links.component';
import { InfoComponent } from './about/info.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children:[//Estos hijos mostran por router-outlet en el aboutComponent
      {
        path: 'links',
        component: LinksComponent
      },
      {
        path: 'info',
        component: InfoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
