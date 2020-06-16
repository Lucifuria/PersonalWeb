import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(public nightModeService: NightModeService) { }

  ngOnInit(): void {

    this.nightModeService.setMode();

  }

}
