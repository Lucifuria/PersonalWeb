import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NightModeService } from '../night-mode.service'

@Component({
  selector: 'app-nigh-mode-switch',
  templateUrl: './nigh-mode-switch.component.html',
  styleUrls: ['./nigh-mode-switch.component.css']
})
export class NighModeSwitchComponent implements OnInit {

  constructor(public nightModeService: NightModeService) { 

  }

  ngOnInit(): void {
  }

  SlideToggleChanged() {

    this.nightModeService.nightMode = !this.nightModeService.nightMode;
    this.nightModeService.setMode();
    
  }

}
