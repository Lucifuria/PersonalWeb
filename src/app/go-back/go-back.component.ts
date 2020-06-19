import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.css']
})
export class GoBackComponent implements OnInit {

  constructor(public nightModeService: NightModeService) { }

  ngOnInit(): void {

    this.nightModeService.setMode();

  }

}
