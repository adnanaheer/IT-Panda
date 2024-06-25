import { Component, OnInit} from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";
import { FooterComponent } from '../footer/footer.component';
import { ForcepagetopComponent } from '../shared/forcepagetop/forcepagetop.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone:true,
  imports: [CommonModule,FooterComponent,ForcepagetopComponent,RouterModule,]
})
export class ServicesComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }
  ngOnInit(){
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }
}
