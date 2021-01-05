import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';
import { PageService } from '../page.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(public nightModeService: NightModeService, public pageService: PageService, public cvService: CvService) {}

  ngOnInit(): void {
    
    this.nightModeService.setMode();
    this.pageService.setPage();

  }

  home_page: boolean = true;
  cvhome_page = false;
  go_back = false;
  go_home = false;
  lastEvent = -51;
  startTouch = 0;

  onTouchStart(evt) { 
    this.startTouch = evt.touches[0].clientY;
  }

  onMouseWheel(evt) {      
    let verticalDirection: number = 0;
    let goUp = false;
    let goDown = false;

    if (evt == null)
    {
      if (this.home_page)
        goDown = true;
      else
        goUp = true;

      this.pageService.timerPause = true;
    }
    else {
      if (evt.changedTouches)
        verticalDirection = this.startTouch - evt.changedTouches[0].clientY;
      if (evt.timeStamp - this.lastEvent > 50)
        this.pageService.timerPause = true;
        
      this.lastEvent = evt.timeStamp;   

      goDown = (verticalDirection > 10 || evt.wheelDelta < 0);
      goUp = (verticalDirection < -10 || evt.wheelDelta > 0);
    }

    
  
    if (this.pageService.timerPause) {       
      //console.log(evt.timeStamp);
      if (goDown) {
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
      }
      else if (goUp) {
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
      }

      this.nightModeService.setMode();
      this.pageService.setPage();
      this.pageService.timerPause = false;
    } 

  }

  goInto(evt) { 
    if (this.pageService.currentPage == "cvhome") {
      this.pageService.currentPage = "cv";
      this.cvService.small_version = false;
    }

    if (this.pageService.currentPage == "cv") this.go_back = true;

    this.nightModeService.setMode();
    this.pageService.setPage();
  }

  goBack(evt) { 
    if (this.pageService.currentPage == "cv") {
      this.pageService.currentPage = "cvhome";
      this.cvService.small_version = true;
    }

    this.go_back = false;

    this.nightModeService.setMode();
    this.pageService.setPage();
  }

  goHome(evt) { 
    this.pageService.currentPage = "home";
    this.cvService.small_version = true;
    this.go_home = false;
    this.go_back = false;
    this.home_page = true;
    this.cvhome_page = false;

    this.nightModeService.setMode();
    this.pageService.setPage();
  }


}
