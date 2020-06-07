import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-cvhome',
  templateUrl: './cvhome.component.html',
  styleUrls: ['./cvhome.component.css']
})
export class CVHomeComponent implements OnInit {

  constructor(public nightModeService: NightModeService, public pageService: PageService) { }

  ngOnInit(): void {
    
    this.pageService.setInvisible("cvhome-text");
    this.nightModeService.setMode();

  }
}
