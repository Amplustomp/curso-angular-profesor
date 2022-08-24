import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03PerListComponent } from './c03-per-list.component';

describe('C03PerListComponent', () => {
  let component: C03PerListComponent;
  let fixture: ComponentFixture<C03PerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03PerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C03PerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
