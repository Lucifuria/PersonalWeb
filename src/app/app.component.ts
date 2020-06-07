import { Component } from '@angular/core';
import { NightModeService } from './night-mode.service';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public nightModeService: NightModeService, public pageService: PageService) { }

  home_page = true;
  cvhome_page = false;
  portfoliohome_page = false;

  onMouseWheel(evt) {    
    console.log(evt.wheelDelta);
    if (this.pageService.test){
      if (evt.wheelDelta < 0) {
        if (this.pageService.currentPage == "home") {
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
      this.pageService.test = false;
    }
    
  
    setTimeout(() => {
      this.pageService.test = true;

    }, 200);
    
  }

}
