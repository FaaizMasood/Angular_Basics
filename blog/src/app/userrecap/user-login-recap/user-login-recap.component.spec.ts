import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginRecapComponent } from './user-login-recap.component';

describe('UserLoginRecapComponent', () => {
  let component: UserLoginRecapComponent;
  let fixture: ComponentFixture<UserLoginRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
