import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {environment} from '../../environments/environment';
import {PaintColor} from './paint-color';
import {PaintColorFilter} from './paint-color-filter';

@Injectable()
export class PaintColorService {

  constructor(private http: Http) {

  }

  getPaintColors(filter?: PaintColorFilter): Observable<PaintColor[]> {
    const options = {
      params: {
        filter: filter
      }
    };

    return this.http
      .get(environment.apiUrl + 'paint-colors/', options)
      .map(response => response.json());
  }

}
