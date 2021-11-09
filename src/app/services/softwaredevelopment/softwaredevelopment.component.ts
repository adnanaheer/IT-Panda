import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-softwaredevelopment',
  templateUrl: './softwaredevelopment.component.html',
  styleUrls: ['./softwaredevelopment.component.css']
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
