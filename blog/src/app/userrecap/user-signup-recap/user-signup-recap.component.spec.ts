import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupRecapComponent } from './user-signup-recap.component';

describe('UserSignupRecapComponent', () => {
  let component: UserSignupRecapComponent;
  let fixture: ComponentFixture<UserSignupRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignupRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignupRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
