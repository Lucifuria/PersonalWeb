import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.css']
})
export class PortfoliohomeComponent implements OnInit {

  constructor(public pageService: PageService, public nightModeService: NightModeService) { }

  ngOnInit(): void {

    this.pageService.setInvisible("portfoliohome-text");
    this.nightModeService.setMode();

  }

}
