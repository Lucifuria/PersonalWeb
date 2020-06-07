import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NighModeSwitchComponent } from './nigh-mode-switch.component';

describe('NighModeSwitchComponent', () => {
  let component: NighModeSwitchComponent;
  let fixture: ComponentFixture<NighModeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NighModeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NighModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
