import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nightModeService: NightModeService, public pageService: PageService) { }

  ngOnInit(): void {

    this.pageService.setInvisible("home-text");
    this.nightModeService.setMode();
    
  }
  
}
