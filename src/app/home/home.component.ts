import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Mainport1Component } from './mainport1/mainport1.component';
import { Mainport2Component } from './mainport2/mainport2.component';
import { Mainport3Component } from './mainport3/mainport3.component';
import { Mainport4Component } from './mainport4/mainport4.component';
import { ForcepagetopComponent } from '../shared/forcepagetop/forcepagetop.component';
import { FooterComponent } from '../footer/footer.component';
import { TestimonialComponent } from '../shared/testimonial/testimonial.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule, Mainport1Component,Mainport2Component,Mainport3Component,Mainport4Component,ForcepagetopComponent,FooterComponent,TestimonialComponent]
})



export class HomeComponent implements OnInit {
  activeSection = 'mainport1';
  constructor() { }
  ngOnInit() {
  }

}
