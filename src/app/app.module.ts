import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CVHomeComponent } from './cvhome/cvhome.component';
import { HomeComponent } from './home/home.component';
import { NighModeSwitchComponent } from './nigh-mode-switch/nigh-mode-switch.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { PortraitImageComponent } from './portrait-image/portrait-image.component';
import { PortfoliohomeComponent } from './portfoliohome/portfoliohome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { GoBackComponent } from './go-back/go-back.component';
import { GoUpDownComponent } from './go-up-down/go-up-down.component';
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CVHomeComponent,
    HomeComponent,
    NighModeSwitchComponent,
    BackgroundImageComponent,
    PortraitImageComponent,
    PortfoliohomeComponent,
    PortfolioComponent,
    CvComponent,
    GoHomeComponent,
    GoBackComponent,
    GoUpDownComponent,
    ArtGalleryComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
