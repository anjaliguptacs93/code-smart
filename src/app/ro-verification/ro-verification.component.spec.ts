import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoVerificationComponent } from './ro-verification.component';

describe('RoVerificationComponent', () => {
  let component: RoVerificationComponent;
  let fixture: ComponentFixture<RoVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
