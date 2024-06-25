import { Component, OnInit} from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";
import { TestimonialComponent } from 'src/app/shared/testimonial/testimonial.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { ForcepagetopComponent } from 'src/app/shared/forcepagetop/forcepagetop.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  standalone:true,
  imports: [CommonModule,TestimonialComponent,FooterComponent,ForcepagetopComponent,RouterModule,]
})
export class AngularComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
