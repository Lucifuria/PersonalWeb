import { Injectable } from '@angular/core';
import { NightModeService } from './night-mode.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  public currentPage = "home";
  public test = true;
  private start = true;

  constructor(public nightModeService: NightModeService) { }

  public setPage() {
    let background_photo = document.getElementById('background-photo');    
    let background_photo_mask = document.getElementById('background-photo-mask');    
    let portrait_photo = document.getElementById('portrait-photo');    
    let portrait_photo_mask = document.getElementById('portrait-photo-mask');
    let home_text = document.getElementById('home-text');
    let cvhome_text = document.getElementById('cvhome-text');
    let portfoliohome_text = document.getElementById('portfoliohome-text');

    if (this.nightModeService.nightMode) {
      background_photo.className = "background-photo-night-" + this.currentPage;         
      portrait_photo.className = "portrait-photo-night-" + this.currentPage;     
    }
    else {      
      background_photo.className = "background-photo-day-" + this.currentPage; 
      portrait_photo.className = "portrait-photo-day-" + this.currentPage;  
    }
    
    background_photo_mask.className = "background-photo-mask-" + this.currentPage;
    portrait_photo_mask.className = "portrait-photo-mask-" + this.currentPage;

    if (this.currentPage == "home" && home_text) {
      home_text.className = home_text.className.replace("hidden", "visible");
    }
    else if (home_text) {
      home_text.className = home_text.className.replace("visible", "hidden");
    }

    if (this.currentPage == "cvhome" && cvhome_text) {
      cvhome_text.className = cvhome_text.className.replace("hidden", "visible");
    }
    else if (cvhome_text) {
      cvhome_text.className = cvhome_text.className.replace("visible", "hidden");
    }

    if (this.currentPage == "portfoliohome" && portfoliohome_text) {
      portfoliohome_text.className = portfoliohome_text.className.replace("hidden", "visible");
    }
    else if (portfoliohome_text) {
      portfoliohome_text.className = portfoliohome_text.className.replace("visible", "hidden");
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
