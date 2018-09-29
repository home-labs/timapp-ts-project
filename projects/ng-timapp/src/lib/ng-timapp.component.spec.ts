import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimappComponent } from './ng-timapp.component';

describe('NgTimappComponent', () => {
  let component: NgTimappComponent;
  let fixture: ComponentFixture<NgTimappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
