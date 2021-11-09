import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-cmsweb',
  templateUrl: './cmsweb.component.html',
  styleUrls: ['./cmsweb.component.css']
})
export class CmswebComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
