import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { DigitalmarketingPortfolioComponent } from './digitalmarketing-portfolio/digitalmarketing-portfolio.component';
import { AngularPortfolioComponent } from './angular-portfolio/angular-portfolio.component';
import { GraphicdesignPortfolioComponent } from './graphicdesign-portfolio/graphicdesign-portfolio.component';
import { LandingpagePortfolioComponent } from './landingpage-portfolio/landingpage-portfolio.component';
import { ReactPortfolioComponent } from './react-portfolio/react-portfolio.component';
import { SoftwaredevelopmentPortfolioComponent } from './softwaredevelopment-portfolio/softwaredevelopment-portfolio.component';
import { WebsitedesignPortfolioComponent } from './websitedesign-portfolio/websitedesign-portfolio.component';
import { ForcepagetopComponent } from '../shared/forcepagetop/forcepagetop.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,DigitalmarketingPortfolioComponent,AngularPortfolioComponent,GraphicdesignPortfolioComponent,LandingpagePortfolioComponent,ReactPortfolioComponent,SoftwaredevelopmentPortfolioComponent,WebsitedesignPortfolioComponent,ForcepagetopComponent,FooterComponent]
})
export class PortfolioComponent implements OnInit {
  activeSection = 'angular-portfolio';
  constructor() { }
  ngOnInit(): void {
  }

}
