import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(public nightModeService: NightModeService, public pageService: PageService) { }

  ngOnInit(): void {

    this.nightModeService.setMode();
    this.pageService.setPage();

  }

}
