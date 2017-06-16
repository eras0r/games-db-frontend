import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Filter} from '../core/filter';
import {PaintColor} from './paint-color';
import {PaintColorApiService} from './paint-color-api.service';

@Injectable()
export class PaintColorService {

  constructor(private paintColorApiService: PaintColorApiService) {

  }

  public getPaintColors(filter?: Filter<PaintColor>): Observable<PaintColor[]> {
    return this.paintColorApiService.getPaintColors(filter);
  }

  public createPaintColor(paintColor: PaintColor): Observable<PaintColor> {
    return this.paintColorApiService.createPaintColor(paintColor);
  }

  public getPaintColorById(id: string): Observable<PaintColor> {
    return this.paintColorApiService.getPaintColorById(id);
  }

  public updatePaintColor(paintColor: PaintColor): Observable<PaintColor> {
    return this.paintColorApiService.updatePaintColor(paintColor);
  }

  public deletePaintColorById(id: string): Observable<null> {
    return this.paintColorApiService.deletePaintColorById(id);
  }

}
