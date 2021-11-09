import { Component, OnInit} from '@angular/core';
import { ViewportScroller } from "@angular/common";


@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.css']
})
export class DigitalmarketingComponent implements OnInit {
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
