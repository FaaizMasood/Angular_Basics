import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlazylistComponent } from './adminlazylist.component';

describe('AdminlazylistComponent', () => {
  let component: AdminlazylistComponent;
  let fixture: ComponentFixture<AdminlazylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlazylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlazylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
