import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";
import { TestimonialComponent } from 'src/app/shared/testimonial/testimonial.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { ForcepagetopComponent } from 'src/app/shared/forcepagetop/forcepagetop.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css'],
  standalone:true,
  imports: [CommonModule,TestimonialComponent,FooterComponent,ForcepagetopComponent,RouterModule]
})
export class ErpComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
