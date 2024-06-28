import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";
import { TestimonialComponent } from 'src/app/shared/testimonial/testimonial.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { ForcepagetopComponent } from 'src/app/shared/forcepagetop/forcepagetop.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landingpages',
  templateUrl: './landingpages.component.html',
  styleUrls: ['./landingpages.component.css'],
  standalone:true,
  imports: [CommonModule,TestimonialComponent,FooterComponent,ForcepagetopComponent,RouterModule,]
})
export class LandingpagesComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
