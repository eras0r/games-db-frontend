import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Filter} from '../core/filter';
import {PaintColor} from './paint-color';

@Injectable()
export class PaintColorMockService {

  public static readonly MOCK_PAINT_COLORS: PaintColor[] = [
    new PaintColor('1', 'Caliban Green', 'Base', '00401F'),
    new PaintColor('2', 'Lothern Blue', 'Layer', '32A2CF')
  ];

  constructor() {
    // init spies
    spyOn(this, 'getPaintColors').and.callThrough();
    spyOn(this, 'createPaintColor').and.callThrough();
    spyOn(this, 'getPaintColorById').and.callThrough();
    spyOn(this, 'updatePaintColor').and.callThrough();
    spyOn(this, 'deletePaintColorById').and.callThrough();
  }

  public getPaintColors(filter?: Filter<PaintColor>): Observable<PaintColor[]> {
    return Observable.of(PaintColorMockService.MOCK_PAINT_COLORS);
  }

  public createPaintColor(paintColor: PaintColor): Observable<PaintColor> {
    const id = PaintColorMockService.MOCK_PAINT_COLORS.length + 1 + '';
    paintColor.setId(id);

    return Observable.of(paintColor);
  }

  public getPaintColorById(id: string): Observable<PaintColor> {
    return Observable.of(PaintColorMockService.MOCK_PAINT_COLORS.filter(color => color.getId() === id)[0]);
  }

  public updatePaintColor(paintColor: PaintColor): Observable<PaintColor> {
    return Observable.of(paintColor);
  }

  public deletePaintColorById(id: string): Observable<null> {
    return Observable.of(null);
  }

}
