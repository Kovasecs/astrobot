import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './navigator/footer.component';
import { HeaderComponent } from './navigator/header.component';
import { MainComponent } from './navigator/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [NavigatorComponent,FooterComponent,HeaderComponent,MainComponent],
  exports: [NavigatorComponent]
})
export class CoreModule { }
