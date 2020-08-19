import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../night-mode.service';

@Component({
  selector: 'app-go-up-down',
  templateUrl: './go-up-down.component.html',
  styleUrls: ['./go-up-down.component.css']
})
export class GoUpDownComponent implements OnInit {

  constructor(public nightModeService: NightModeService) { }

  ngOnInit(): void {

    this.nightModeService.setMode();
    
  }

}
