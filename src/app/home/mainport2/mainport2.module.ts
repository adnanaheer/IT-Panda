import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mainport2Component } from './mainport2.component'
import { Mainport2RoutingModule } from './mainport2-routing.module';


@NgModule({
  declarations: [Mainport2Component],
  imports: [
    CommonModule,
    Mainport2RoutingModule
  ]
})
export class Mainport2Module { }
