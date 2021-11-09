import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mainport1Component } from './mainport1.component'
import { Mainport1RoutingModule } from './mainport1-routing.module';


@NgModule({
  declarations: [Mainport1Component],
  imports: [
    CommonModule,
    Mainport1RoutingModule
  ]
})
export class Mainport1Module { }
