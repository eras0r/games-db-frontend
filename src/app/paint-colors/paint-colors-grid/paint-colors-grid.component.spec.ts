import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {DebugElement} from '@angular/core';

import {PaintColorsGridComponent} from './paint-colors-grid.component';
import {PaintColorService} from '../paint-color.service';
import {PaintColorMockService} from '../paint-color.service.mock';
import {PaintColorCardComponent} from '../paint-color-card/paint-color-card.component';
import {By} from '@angular/platform-browser';
import {PaintColorsMock} from '../paint-colors.mock';

describe('PaintColorsGridComponent', () => {
  let component: PaintColorsGridComponent;
  let fixture: ComponentFixture<PaintColorsGridComponent>;
  let compiled: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaintColorsGridComponent, PaintColorCardComponent],
      providers: [{provide: PaintColorService, useClass: PaintColorMockService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintColorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement;
  });

  describe('ngOnInit', () => {

    it('should load the paint colors from the service', inject([PaintColorService], (service: PaintColorService) => {
      expect(service.getPaintColors).toHaveBeenCalledWith();
    }));

    it('should assign the paint colors', fakeAsync(() => {
      tick();

      expect(component.paintColors).toBe(PaintColorsMock.MOCK_PAINT_COLORS);
    }));

    describe('should show a paint color card for each paint color', () => {

      it('contain the proper number of paint color cards', fakeAsync(() => {
        tick();

        const paintColorCards = compiled.queryAll(By.css('gdb-paint-color-card'));
        expect(paintColorCards.length).toBe(PaintColorsMock.MOCK_PAINT_COLORS.length);

        let cardComponent;

        PaintColorsMock.MOCK_PAINT_COLORS.forEach((paintColor, i) => {
          cardComponent = paintColorCards[i].componentInstance;

          expect(cardComponent instanceof PaintColorCardComponent).toBe(true);
        });

      }));

      it('bind each paint color to the paint color card', fakeAsync(() => {
        tick();

        const paintColorCards = compiled.queryAll(By.css('gdb-paint-color-card'));
        expect(paintColorCards.length).toBe(PaintColorsMock.MOCK_PAINT_COLORS.length);

        let cardComponent;

        PaintColorsMock.MOCK_PAINT_COLORS.forEach((paintColor, i) => {
          cardComponent = paintColorCards[i].componentInstance;

          expect(cardComponent.paintColor).toBe(paintColor);
        });

      }));

    });

  });

});
