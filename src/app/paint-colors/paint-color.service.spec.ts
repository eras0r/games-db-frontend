import {async, inject, TestBed} from '@angular/core/testing';
import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {Observable} from 'rxjs/Observable';

import {environment} from '../../environments/environment';
import {PaintColorService} from './paint-color.service';
import {PaintColor} from './paint-color';
import {PaintColorFilter} from './paint-color-filter';

describe('PaintColorService', () => {

  const fakePaintColors: PaintColor[] = [
    new PaintColor(),
    new PaintColor()
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PaintColorService, {provide: XHRBackend, useClass: MockBackend}]
    });
  });

  it('should be created', inject([PaintColorService], (service: PaintColorService) => {
    expect(service).toBeTruthy();
  }));

  describe('getPaintColors()', () => {
    let backend: MockBackend;
    let httpSpy: Http;
    let successFulResponse: Response;
    let errorResponse: Error;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      httpSpy = http;

      spyOn(httpSpy, 'get').and.callThrough();

      const options = new ResponseOptions({status: 200, body: fakePaintColors});
      successFulResponse = new Response(options);
      errorResponse = new Error();
    }));

    it('should return an Observable', async(inject([PaintColorService], (service: PaintColorService) => {
      expect(service.getPaintColors() instanceof Observable).toBe(true);
    })));

    describe('should call the REST API endpoint properly', () => {

      const url = environment.apiUrl + 'paint-colors/';

      it('without filter', async(inject([PaintColorService], (service: PaintColorService) => {
        service.getPaintColors();

        const options = {
          params: {
            filter: undefined
          }
        };

        expect(httpSpy.get).toHaveBeenCalledWith(url, options);
      })));

      it('with filter', async(inject([PaintColorService], (service: PaintColorService) => {
        const filter = new PaintColorFilter(new PaintColor());
        service.getPaintColors(filter);

        const options = {
          params: {
            filter: filter
          }
        };

        expect(httpSpy.get).toHaveBeenCalledWith(url, options);
      })));

    });

    it('should contain the paint colors returned by the REST API', async(inject([PaintColorService], (service: PaintColorService) => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(successFulResponse));

      service.getPaintColors().subscribe(
        paintColors => {
          expect(paintColors).toEqual(fakePaintColors, 'should have expected paintColors');
        });
    })));

    it('should contain the error in case the REST API calls was erroneous',
      async(inject([PaintColorService], (service: PaintColorService) => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(errorResponse));

        service.getPaintColors().subscribe(
          paintColors => {

          },
          err => {
            expect(err).toBe(errorResponse);
          });
      })));

  });

});
