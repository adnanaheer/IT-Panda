import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ServicesComponent } from './services/services.component'
import {AngularComponent } from './services/angular/angular.component'
import { CmswebComponent } from './services/cmsweb/cmsweb.component'
import { DigitalmarketingComponent } from './services/digitalmarketing/digitalmarketing.component'
import { ErpComponent } from './services/erp/erp.component'
import { GraphicdesignComponent } from './services/graphicdesign/graphicdesign.component'
import { LandingpagesComponent } from './services/landingpages/landingpages.component'
import { MobappdevelopmentComponent } from './services/mobappdevelopment/mobappdevelopment.component'
import { ReactComponent } from './services/react/react.component'
import { SoftwaredevelopmentComponent } from './services/softwaredevelopment/softwaredevelopment.component'
import { WebdesignComponent } from './services/webdesign/webdesign.component'
import { CareersComponent } from './careers/careers/careers.component';
import { TeamComponent } from './team/team.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'Team',
    component: TeamComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'service',
    component: ServicesComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'service/angular',
    component: AngularComponent
  },
  {
    path: 'service/cms',
    component: CmswebComponent
  },
  {
    path: 'service/digitalmarket',
    component: DigitalmarketingComponent
  },
  {
    path: 'service/erp',
    component: ErpComponent
  },
  {
    path: 'service/graphicdesign',
    component: GraphicdesignComponent
  },
  {
    path: 'service/landingpage',
    component: LandingpagesComponent
  },
  {
    path: 'service/mobileapplicationdevelopment',
    component: MobappdevelopmentComponent
  },
  {
    path: 'service/react',
    component: ReactComponent
  },
  {
    path: 'service/softwaredevelopment',
    component: SoftwaredevelopmentComponent
  },
  {
    path: 'service/websitedesign',
    component: WebdesignComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
