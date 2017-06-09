import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaintColorsComponent } from './show-paint-colors.component';

describe('ShowPaintColorsComponent', () => {
  let component: ShowPaintColorsComponent;
  let fixture: ComponentFixture<ShowPaintColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPaintColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPaintColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
