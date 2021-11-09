import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mainport3Component } from './mainport3.component'
import { Mainport3RoutingModule } from './mainport3-routing.module';


@NgModule({
  declarations: [Mainport3Component],
  imports: [
    CommonModule,
    Mainport3RoutingModule
  ]
})
export class Mainport3Module { }
