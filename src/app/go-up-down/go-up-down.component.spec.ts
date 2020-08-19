import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUpDownComponent } from './go-up-down.component';

describe('GoUpDownComponent', () => {
  let component: GoUpDownComponent;
  let fixture: ComponentFixture<GoUpDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoUpDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
