import { Component, OnInit} from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrls: ['./webdesign.component.css']
})
export class WebdesignComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
