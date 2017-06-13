import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowPaintColorsComponent} from './paint-colors-grid.component';
import {PaintColorService} from '../paint-color.service';
import {MockPaintColorService} from '../paint-color.service.mock';
import {PaintColorCardComponent} from '../paint-color-card/paint-color-card.component';

describe('PaintColorsGridComponent', () => {
  let component: ShowPaintColorsComponent;
  let fixture: ComponentFixture<ShowPaintColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPaintColorsComponent, PaintColorCardComponent],
      providers: [{provide: PaintColorService, useClass: MockPaintColorService}]
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
