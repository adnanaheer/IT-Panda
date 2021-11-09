import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mainport4Component } from './mainport4.component'
import { Mainport4RoutingModule } from './mainport4-routing.module';


@NgModule({
  declarations: [Mainport4Component],
  imports: [
    CommonModule,
    Mainport4RoutingModule
  ]
})
export class Mainport4Module { }
