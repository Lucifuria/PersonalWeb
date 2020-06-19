import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';

@Component({
  selector: 'app-go-home',
  templateUrl: './go-home.component.html',
  styleUrls: ['./go-home.component.css']
})
export class GoHomeComponent implements OnInit {

  constructor(public nightModeService: NightModeService) { }

  ngOnInit(): void {

    this.nightModeService.setMode();

  }

}
