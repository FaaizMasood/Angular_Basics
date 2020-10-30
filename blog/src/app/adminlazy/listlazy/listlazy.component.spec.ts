import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlazyComponent } from './listlazy.component';

describe('ListlazyComponent', () => {
  let component: ListlazyComponent;
  let fixture: ComponentFixture<ListlazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
