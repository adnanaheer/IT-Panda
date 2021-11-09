import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-graphicdesign',
  templateUrl: './graphicdesign.component.html',
  styleUrls: ['./graphicdesign.component.css']
})
export class GraphicdesignComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
