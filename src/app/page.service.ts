import { Injectable } from '@angular/core';
import { NightModeService } from './night-mode.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  public currentPage = "home";
  public timerPause = false;
  private start = true;

  constructor(public nightModeService: NightModeService) { }

  public setPage() {
    let background_photo = document.getElementById('background-photo');    
    let background_photo_mask = document.getElementById('background-photo-mask');  
    let background_photo_cover = document.getElementById('background-photo-cover');   
    let portrait_photo = document.getElementById('portrait-photo');    
    let portrait_photo_mask = document.getElementById('portrait-photo-mask');
    let home_text = document.getElementById('home-text');
    let cvhome_text = document.getElementById('cvhome-text');
    let portfoliohome_text = document.getElementById('portfoliohome-text');
    let cv = document.getElementById('cv');
    let cv_middle_text = document.getElementById('cv-middle-text');
    let up_down_arrow = document.getElementById('up-down-arrow');

    if (this.nightModeService.nightMode) {
      background_photo.className = "background-photo-night-" + this.currentPage;  
      background_photo_cover.className = "background-photo-cover-night-" + this.currentPage;        
      portrait_photo.className = "portrait-photo-night-" + this.currentPage;  
      if (cv) cv.className = "cv-night-" + this.currentPage;      
      if (up_down_arrow) up_down_arrow.className = "up-down-arrow-night-" + this.currentPage;
    }
    else {      
      background_photo.className = "background-photo-day-" + this.currentPage; 
      background_photo_cover.className = "background-photo-cover-day-" + this.currentPage; 
      portrait_photo.className = "portrait-photo-day-" + this.currentPage;    
      if (cv) cv.className = "cv-day-" + this.currentPage;
      if (up_down_arrow) up_down_arrow.className = "up-down-arrow-day-" + this.currentPage;
    }
    
    background_photo_mask.className = "background-photo-mask-" + this.currentPage;
    portrait_photo_mask.className = "portrait-photo-mask-" + this.currentPage;  
    if (cv_middle_text) cv_middle_text.className = "middle-text-" + this.currentPage;

    if (this.currentPage == "home" && home_text) {
      home_text.className = home_text.className.replace("hidden", "visible");
    }
    else if (home_text) {
      home_text.className = home_text.className.replace("visible", "hidden");
    }

    this.changeVisiblePageHidden(cvhome_text, "cv");
    this.changeVisiblePageHidden(portfoliohome_text, "portfolio");

  }

  changeVisiblePageHidden (element: HTMLElement, text: string) {
    if (this.currentPage == text + "home" && element) {
      element.className = element.className.replace("hidden", "visible");    
      element.className = element.className.replace("page", "visible");
    }
    else if (this.currentPage == text && element) {      
      element.className = element.className.replace("visible", "page");
    }
    else if (element) {
      element.className = element.className.replace("visible", "hidden");
    }
  }

  public setInvisible(textID: string) {
    let text = document.getElementById(textID);
    console.log(this.start);
    if (this.start) {
      this.start = false;      
      text.className = text.className.replace("hidden", "visible");
    }
    else {             
      text.className = text.className.replace("visible", "hidden");
      this.delay(50).then(any=>{          
        text.className = text.className.replace("hidden", "visible");
        console.log("success");
      });
    }
  }

  public async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>{});
  }
}
