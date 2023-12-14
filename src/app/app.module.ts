import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Mainport1Component } from './home/mainport1/mainport1.component';
import { Mainport2Component } from './home/mainport2/mainport2.component';
import { Mainport3Component } from './home/mainport3/mainport3.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Mainport4Component } from './home/mainport4/mainport4.component';
import { ServicesComponent } from './services/services.component';
import { AngularComponent } from './services/angular/angular.component';
import { ReactComponent } from './services/react/react.component';
import { WebdesignComponent } from './services/webdesign/webdesign.component';
import { SoftwaredevelopmentComponent } from './services/softwaredevelopment/softwaredevelopment.component';
import { MobappdevelopmentComponent } from './services/mobappdevelopment/mobappdevelopment.component';
import { CmswebComponent } from './services/cmsweb/cmsweb.component';
import { ErpComponent } from './services/erp/erp.component';
import { DigitalmarketingComponent } from './services/digitalmarketing/digitalmarketing.component';
import { LandingpagesComponent } from './services/landingpages/landingpages.component';
import { GraphicdesignComponent } from './services/graphicdesign/graphicdesign.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { ForcepagetopComponent } from './shared/forcepagetop/forcepagetop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularPortfolioComponent } from './portfolio/angular-portfolio/angular-portfolio.component';
import { ReactPortfolioComponent } from './portfolio/react-portfolio/react-portfolio.component';
import { CmsPortfolioComponent } from './portfolio/cms-portfolio/cms-portfolio.component';
import { DigitalmarketingPortfolioComponent } from './portfolio/digitalmarketing-portfolio/digitalmarketing-portfolio.component';
import { ErpPortfolioComponent } from './portfolio/erp-portfolio/erp-portfolio.component';
import { GraphicdesignPortfolioComponent } from './portfolio/graphicdesign-portfolio/graphicdesign-portfolio.component';
import { LandingpagePortfolioComponent } from './portfolio/landingpage-portfolio/landingpage-portfolio.component';
import { MobappdevelopmentPortfolioComponent } from './portfolio/mobappdevelopment-portfolio/mobappdevelopment-portfolio.component';
import { SoftwaredevelopmentPortfolioComponent } from './portfolio/softwaredevelopment-portfolio/softwaredevelopment-portfolio.component';
import { WebsitedesignPortfolioComponent } from './portfolio/websitedesign-portfolio/websitedesign-portfolio.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CareersComponent } from './careers/careers/careers.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    FooterComponent,
    Mainport1Component,
    Mainport2Component,
    Mainport3Component,
    ContactUsComponent,
    PortfolioComponent,
    Mainport4Component,
    ServicesComponent,
    AngularComponent,
    ReactComponent,
    WebdesignComponent,
    SoftwaredevelopmentComponent,
    MobappdevelopmentComponent,
    CmswebComponent,
    ErpComponent,
    DigitalmarketingComponent,
    LandingpagesComponent,
    GraphicdesignComponent,
    TestimonialComponent,
    ForcepagetopComponent,
    AngularPortfolioComponent,
    ReactPortfolioComponent,
    CmsPortfolioComponent,
    DigitalmarketingPortfolioComponent,
    ErpPortfolioComponent,
    GraphicdesignPortfolioComponent,
    LandingpagePortfolioComponent,
    MobappdevelopmentPortfolioComponent,
    SoftwaredevelopmentPortfolioComponent,
    WebsitedesignPortfolioComponent,
    CareersComponent,
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
