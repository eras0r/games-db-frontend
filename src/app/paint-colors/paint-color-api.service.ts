import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Filter} from '../core/filter';
import {environment} from '../../environments/environment';
import {PaintColor} from './paint-color';

const API_URL = environment.apiUrl;

@Injectable()
export class PaintColorApiService {

  constructor(private http: Http) {

  }

  getPaintColors(filter?: Filter<PaintColor>): Observable<PaintColor[]> {
    const options = {
      params: {
        filter: filter
      }
    };

    return this.http
      .get(API_URL + '/paint-colors', options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public createPaintColor(paintColor: PaintColor): Observable<PaintColor> {
    return this.http
      .post(API_URL + '/paint-colors', paintColor)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public getPaintColorById(id: string): Observable<PaintColor> {
    return this.http
      .get(API_URL + '/paint-colors/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public updatePaintColor(paintColor: PaintColor): Observable<PaintColor> {
    return this.http
      .put(API_URL + '/paint-colors/' + paintColor.getId(), paintColor)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public deletePaintColorById(id: string): Observable<null> {
    return this.http
      .delete(API_URL + '/paint-colors/' + id)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('PaintColorApiService::handleError', error);
    return Observable.throw(error);
  }

}
