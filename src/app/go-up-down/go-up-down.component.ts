import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-go-up-down',
  templateUrl: './go-up-down.component.html',
  styleUrls: ['./go-up-down.component.css']
})
export class GoUpDownComponent implements OnInit {

  constructor(public nightModeService: NightModeService, public pageService: PageService) { }

  ngOnInit(): void {

    this.nightModeService.setMode();
    this.pageService.setPage();

  }

}
