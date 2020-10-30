import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistlazyComponent } from './userlistlazy.component';

describe('UserlistlazyComponent', () => {
  let component: UserlistlazyComponent;
  let fixture: ComponentFixture<UserlistlazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistlazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
