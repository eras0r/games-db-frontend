import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintColorCardComponent } from './paint-color-card.component';

describe('PaintColorCardComponent', () => {
  let component: PaintColorCardComponent;
  let fixture: ComponentFixture<PaintColorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintColorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintColorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
