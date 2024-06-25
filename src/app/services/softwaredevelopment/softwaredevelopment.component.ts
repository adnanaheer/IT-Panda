import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";
import { ForcepagetopComponent } from 'src/app/shared/forcepagetop/forcepagetop.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { TestimonialComponent } from 'src/app/shared/testimonial/testimonial.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-softwaredevelopment',
  templateUrl: './softwaredevelopment.component.html',
  styleUrls: ['./softwaredevelopment.component.css'],
  standalone: true,
  imports: [CommonModule,ForcepagetopComponent,FooterComponent,TestimonialComponent,RouterModule]
})
export class SoftwaredevelopmentComponent implements OnInit {
  isReadMore = true
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }  
  showText() {
    this.isReadMore = !this.isReadMore
 }
}
