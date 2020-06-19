import { Component } from '@angular/core';
import { NightModeService } from './night-mode.service';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public nightModeService: NightModeService, public pageService: PageService) {
  }

  home_page = true;
  cvhome_page = false;
  portfoliohome_page = false;
  cv_page = true;
  go_back = false;
  go_home = false;
  lastEvent = -51;

  onMouseWheel(evt) {   
    if (evt.timeStamp - this.lastEvent > 50)
      this.pageService.timerPause = true;

    this.lastEvent = evt.timeStamp;     
    if (this.pageService.timerPause) {       
      console.log(evt.timeStamp);   
      if (evt.wheelDelta < 0) {
        if (this.pageService.currentPage == "home") {
          this.go_home = true;
          this.pageService.currentPage = "cvhome";
          this.cvhome_page = true;

          this.pageService.delay(1000).then(any=>{          
            if (this.pageService.currentPage != "home") {
              this.home_page = false;
            }
          });
        }
        else if (this.pageService.currentPage == "cvhome") {
          this.pageService.currentPage = "portfoliohome";
          this.portfoliohome_page = true;

          this.pageService.delay(1000).then(any=>{          
            if (this.pageService.currentPage != "cvhome") {
              this.cvhome_page = false;
            }
          });
        }
      }
      else {
        if (this.pageService.currentPage == "cvhome") {  
          this.home_page = true;
          this.go_home = false;
          this.pageService.currentPage = "home";

          this.pageService.delay(1000).then(any=>{          
            if (this.pageService.currentPage != "cvhome") {
              this.cvhome_page = false;
            }
          });
        }
        else if (this.pageService.currentPage == "portfoliohome") {
          this.pageService.currentPage = "cvhome";
          this.cvhome_page = true;

          this.pageService.delay(1000).then(any=>{          
            if (this.pageService.currentPage != "portfoliohome") {
              this.portfoliohome_page = false;
            }
          });
        }
      }

      this.nightModeService.setMode();
      this.pageService.setPage();
      this.pageService.timerPause = false;
    } 

  }

  goInto(evt) { 
    if (this.pageService.currentPage == "cvhome") {
      this.pageService.currentPage = "cv";
    }
    else if (this.pageService.currentPage == "portfoliohome") {
      this.pageService.currentPage = "portfolio";
    }

    this.go_back = true;

    this.nightModeService.setMode();
    this.pageService.setPage();
  }

  goBack(evt) { 
    if (this.pageService.currentPage == "cv") {
      this.pageService.currentPage = "cvhome";
    }
    else if (this.pageService.currentPage == "portfolio") {
      this.pageService.currentPage = "portfoliohome";
    }

    this.go_back = false;

    this.nightModeService.setMode();
    this.pageService.setPage();
  }

  goHome(evt) { 
    this.pageService.currentPage = "home";
    this.go_home = false;
    this.go_back = false;
    this.home_page = true;
    this.portfoliohome_page = false;
    this.cvhome_page = false;

    this.nightModeService.setMode();
    this.pageService.setPage();
  }

}
