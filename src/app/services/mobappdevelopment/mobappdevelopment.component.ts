import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-mobappdevelopment',
  templateUrl: './mobappdevelopment.component.html',
  styleUrls: ['./mobappdevelopment.component.css']
})
export class MobappdevelopmentComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
} 
