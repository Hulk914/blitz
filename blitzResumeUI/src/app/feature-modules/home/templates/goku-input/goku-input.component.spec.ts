import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuInputComponent } from './goku-input.component';

describe('GokuInputComponent', () => {
  let component: GokuInputComponent;
  let fixture: ComponentFixture<GokuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GokuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GokuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
