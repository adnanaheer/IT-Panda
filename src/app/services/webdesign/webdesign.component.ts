import { Component, OnInit} from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";
import { FooterComponent } from 'src/app/footer/footer.component';
import { ForcepagetopComponent } from 'src/app/shared/forcepagetop/forcepagetop.component';
import { TestimonialComponent } from 'src/app/shared/testimonial/testimonial.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrls: ['./webdesign.component.css'],
  standalone: true,
  imports: [CommonModule,FooterComponent,ForcepagetopComponent,TestimonialComponent,RouterModule,]
})
export class WebdesignComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
