import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {
  public nightMode = false;

  constructor() { }

  public setMode() {    
    let index_body = document.getElementById('index_body');
    let background_photo = document.getElementById('background-photo');    
    let background_photo_cover = document.getElementById('background-photo-cover');
    let portrait_photo = document.getElementById('portrait-photo');

    let home_text = document.getElementById('home-text');
    let cvhome_text = document.getElementById('cvhome-text');    
    let portfoliohome_text = document.getElementById('portfoliohome-text');
    
    let cv = document.getElementById('cv');

    let back_arrow = document.getElementById('back-arrow');
    let back_arrow_under = document.getElementById('back-arrow-under');
    let up_down_arrow = document.getElementById('up-down-arrow');    
    let up_down_arrow_under = document.getElementById('up-down-under-arrow');
    let home_button = document.getElementById('home-button');
    let home_button_under = document.getElementById('home-button-under');

    this.replaceDayAndNight(index_body, this.nightMode);
    this.replaceDayAndNight(background_photo, this.nightMode);
    this.replaceDayAndNight(portrait_photo, this.nightMode);
    this.replaceDayAndNight(home_text, this.nightMode);
    this.replaceDayAndNight(cvhome_text, this.nightMode);
    this.replaceDayAndNight(portfoliohome_text, this.nightMode);
    this.replaceDayAndNight(background_photo_cover, this.nightMode);    
    this.replaceDayAndNight(cv, this.nightMode);
    this.replaceDayAndNight(back_arrow, this.nightMode);    
    this.replaceDayAndNight(back_arrow_under, this.nightMode);    
    this.replaceDayAndNight(up_down_arrow, this.nightMode);     
    this.replaceDayAndNight(up_down_arrow_under, this.nightMode);
    this.replaceDayAndNight(home_button, this.nightMode);
    this.replaceDayAndNight(home_button_under, this.nightMode);

  }

  replaceDayAndNight(text: HTMLElement, nightMode: boolean) {
    if (nightMode) {
      if (text) text.className = text.className.replace("day","night");
    }
    else {
      if (text) text.className = text.className.replace("night","day");
    }
  }
}
