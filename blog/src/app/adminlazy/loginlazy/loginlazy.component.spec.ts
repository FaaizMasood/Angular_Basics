import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlazyComponent } from './loginlazy.component';

describe('LoginlazyComponent', () => {
  let component: LoginlazyComponent;
  let fixture: ComponentFixture<LoginlazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginlazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
