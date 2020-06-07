import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVHomeComponent } from './cvhome.component';

describe('CVHomeComponent', () => {
  let component: CVHomeComponent;
  let fixture: ComponentFixture<CVHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
