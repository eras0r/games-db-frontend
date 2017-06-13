import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Filter} from '../core/filter';
import {PaintColor} from './paint-color';

@Injectable()
export class MockPaintColorService {

  getPaintColors = jasmine.createSpy('getItems').and.callFake((filter?: Filter<PaintColor>) => {
    Observable.create(() => {
      return [
        // TODO maybe create better mocks
        new PaintColor(),
        new PaintColor()
      ];
    });
  });

}
