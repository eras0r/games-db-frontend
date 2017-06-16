import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaintColorsGridComponent} from './paint-colors-grid.component';
import {PaintColorService} from '../paint-color.service';
import {MockPaintColorService} from '../paint-color.service.mock';
import {PaintColorCardComponent} from '../paint-color-card/paint-color-card.component';

describe('PaintColorsGridComponent', () => {
  let component: PaintColorsGridComponent;
  let fixture: ComponentFixture<PaintColorsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaintColorsGridComponent, PaintColorCardComponent],
      providers: [{provide: PaintColorService, useClass: MockPaintColorService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintColorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
