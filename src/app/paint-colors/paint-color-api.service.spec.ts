import {async, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import {Filter} from '../core/filter';
import {environment} from '../../environments/environment';
import {PaintColorApiService} from './paint-color-api.service';
import {PaintColor} from './paint-color';
import {PaintColorsMock} from './paint-colors.mock';

function mockSuccessResponse(backend: MockBackend, body: Object): void {
  const options = new ResponseOptions({status: 200, body: body});
  const response = new Response(options);

  backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
}

function mockErrorResponse(backend: MockBackend): Error {
  const error: Error = new Error('REST API error');

  backend.connections.subscribe((c: MockConnection) => c.mockError(error));

  return error;
}

describe('PaintColorApiService', () => {
  const API_URL: string = environment.apiUrl;
  const fakePaintColors = PaintColorsMock.MOCK_PAINT_COLORS;

  let backend: MockBackend;

  let httpSpy: Http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PaintColorApiService, {provide: XHRBackend, useClass: MockBackend}]
    });
  });

  beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
    backend = be;
    httpSpy = http;
  }));

  it('should be created', inject([PaintColorApiService], (service: PaintColorApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('getPaintColors()', () => {

    beforeEach(() => {
      spyOn(httpSpy, 'get').and.callThrough();
    });

    it('should return an Observable', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
      expect(service.getPaintColors() instanceof Observable).toBe(true);
    })));

    describe('should call the REST API endpoint properly', () => {
      const url = API_URL + '/paint-colors';

      it('without filter', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        service.getPaintColors();

        const options = {
          params: {
            filter: undefined
          }
        };

        expect(httpSpy.get).toHaveBeenCalledWith(url, options);
      })));

      it('with filter', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const filter = new Filter(new PaintColor());

        service.getPaintColors(filter);

        const options = {
          params: {
            filter: filter
          }
        };

        expect(httpSpy.get).toHaveBeenCalledWith(url, options);
      })));

    });

    it('should contain the paint colors returned by the REST API', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
      mockSuccessResponse(backend, fakePaintColors);

      service.getPaintColors().subscribe(
        paintColors => {
          expect(paintColors).toEqual(fakePaintColors, 'should contain the expected paintColors');
        });
    })));

    it('should contain the error in case the REST API calls was erroneous',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const errorResponse: Error = mockErrorResponse(backend);

        service.getPaintColors().subscribe(
          paintColors => {

          },
          err => {
            expect(err).toBe(errorResponse);
          });
      })));

  });

  describe('createPaintColor()', () => {
    let newPaintColor: PaintColor;
    let createdPaintColor: PaintColor;

    beforeEach(() => {
      spyOn(httpSpy, 'post').and.callThrough();

      newPaintColor = new PaintColor();
      newPaintColor.setName('Astorath Red');
      newPaintColor.setRange('Dry');
      newPaintColor.setHexColor('DD482b');

      createdPaintColor = new PaintColor('42', newPaintColor.getName(),
        newPaintColor.getRange(), newPaintColor.getHexColor());
    });

    it('should return an Observable', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
      expect(service.createPaintColor(newPaintColor) instanceof Observable).toBe(true);
    })));

    it('should call the REST API endpoint properly',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const url = API_URL + '/paint-colors';

        service.createPaintColor(newPaintColor);

        expect(httpSpy.post).toHaveBeenCalledWith(url, newPaintColor);
      })));

    it('should contain the paint color returned by the REST API',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        mockSuccessResponse(backend, createdPaintColor);

        service.createPaintColor(newPaintColor).subscribe(
          paintColor => {
            expect(paintColor).toEqual(createdPaintColor, 'should contain the expected paintColor');
          });
      })));

    it('should contain the error in case the REST API calls was erroneous',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const errorResponse: Error = mockErrorResponse(backend);

        service.createPaintColor(newPaintColor).subscribe(
          paintColor => {

          },
          err => {
            expect(err).toBe(errorResponse);
          });
      })));

  });

  describe('getPaintColorById()', () => {
    const testPaintColor = fakePaintColors[0];
    const id = testPaintColor.getId();

    beforeEach(() => {
      spyOn(httpSpy, 'get').and.callThrough();
    });

    it('should return an Observable', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
      expect(service.getPaintColorById(id) instanceof Observable).toBe(true);
    })));

    it('should call the REST API endpoint properly',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const url = API_URL + '/paint-colors/' + id;

        service.getPaintColorById(id);

        expect(httpSpy.get).toHaveBeenCalledWith(url);
      })));

    it('should contain the paint color returned by the REST API',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        mockSuccessResponse(backend, testPaintColor);

        service.getPaintColorById(id).subscribe(
          paintColor => {
            expect(paintColor).toEqual(testPaintColor, 'should contain the expected paintColor');
          });
      })));

    it('should contain the error in case the REST API calls was erroneous',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const errorResponse: Error = mockErrorResponse(backend);

        service.getPaintColorById(id).subscribe(
          paintColor => {

          },
          err => {
            expect(err).toBe(errorResponse);
          });
      })));

  });

  describe('updatePaintColor()', () => {
    let paintColorUpdate: PaintColor;
    let updatedPaintColor: PaintColor;

    beforeEach(() => {
      spyOn(httpSpy, 'put').and.callThrough();

      paintColorUpdate = fakePaintColors[0];
      paintColorUpdate.setName('Astorath Red');
      paintColorUpdate.setRange('Dry');
      paintColorUpdate.setHexColor('DD482b');

      updatedPaintColor = new PaintColor(paintColorUpdate.getId(), paintColorUpdate.getName(),
        paintColorUpdate.getRange(), paintColorUpdate.getHexColor());
    });

    it('should return an Observable', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
      expect(service.updatePaintColor(paintColorUpdate) instanceof Observable).toBe(true);
    })));

    it('should call the REST API endpoint properly',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const url = API_URL + '/paint-colors/' + paintColorUpdate.getId();

        service.updatePaintColor(paintColorUpdate);

        expect(httpSpy.put).toHaveBeenCalledWith(url, paintColorUpdate);
      })));

    it('should contain the paint color returned by the REST API',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        mockSuccessResponse(backend, updatedPaintColor);

        service.updatePaintColor(paintColorUpdate).subscribe(
          paintColor => {
            expect(paintColor).toEqual(updatedPaintColor, 'should contain the expected paintColor');
          });
      })));

    it('should contain the error in case the REST API calls was erroneous',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const errorResponse: Error = mockErrorResponse(backend);

        service.updatePaintColor(paintColorUpdate).subscribe(
          paintColor => {

          },
          err => {
            expect(err).toBe(errorResponse);
          });
      })));

  });

  describe('deletePaintColorById()', () => {
    const id = fakePaintColors[0].getId();

    beforeEach(() => {
      spyOn(httpSpy, 'delete').and.callThrough();
    });

    it('should return an Observable', async(inject([PaintColorApiService], (service: PaintColorApiService) => {
      expect(service.deletePaintColorById(id) instanceof Observable).toBe(true);
    })));

    it('should call the REST API endpoint properly',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const url = API_URL + '/paint-colors/' + id;

        service.deletePaintColorById(id);

        expect(httpSpy.delete).toHaveBeenCalledWith(url);
      })));

    it('should contain the paint color returned by the REST API',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        mockSuccessResponse(backend, null);

        service.deletePaintColorById(id).subscribe(
          response => {
            expect(response).toBeNull();
          });
      })));

    it('should contain the error in case the REST API calls was erroneous',
      async(inject([PaintColorApiService], (service: PaintColorApiService) => {
        const errorResponse: Error = mockErrorResponse(backend);

        service.getPaintColorById(id).subscribe(
          response => {

          },
          err => {
            expect(err).toBe(errorResponse);
          });
      })));

  });

});
