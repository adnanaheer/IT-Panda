import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-forcepagetop',
  templateUrl: './forcepagetop.component.html',
  styleUrls: ['./forcepagetop.component.css'],
  standalone: true

})
export class ForcepagetopComponent implements OnInit {
  ngOnInit(): void { }
  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 10, 
      behavior: 'smooth' 
    });
  }
}
