import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuViewComponent } from './goku-view.component';

describe('GokuViewComponent', () => {
  let component: GokuViewComponent;
  let fixture: ComponentFixture<GokuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GokuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GokuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
