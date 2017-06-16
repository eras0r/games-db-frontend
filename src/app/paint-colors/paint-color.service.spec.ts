import {inject, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {PaintColorService} from './paint-color.service';
import {PaintColor} from './paint-color';
import {Filter} from '../core/filter';
import {PaintColorApiService} from './paint-color-api.service';
import {PaintColorsMock} from './paint-colors.mock';
import {PaintColorApiMockService} from './paint-color-api.service.mock';

describe('PaintColorService', () => {

  let service: PaintColorService;
  let apiService: PaintColorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PaintColorService, {provide: PaintColorApiService, useClass: PaintColorApiMockService}]
    });
  });

  beforeEach(inject([PaintColorService, PaintColorApiService],
    (_service_: PaintColorService, _apiService_: PaintColorApiService) => {
      service = _service_;
      apiService = _apiService_;
    }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPaintColors()', () => {
    const filter = new Filter<PaintColor>();

    it('should call the apiService', () => {
      service.getPaintColors(filter);

      expect(apiService.getPaintColors).toHaveBeenCalledWith(filter);
    });

    it('should return an Observable', async () => {
      expect(service.getPaintColors(filter) instanceof Observable).toBe(true);
    });

    it('should contain the proper value within the Observable', (done: DoneFn) => {
      service.getPaintColors(filter)
        .subscribe(paintColors => {
          expect(paintColors).toBe(PaintColorsMock.MOCK_PAINT_COLORS);
          done();
        });
    });

  });

  describe('createPaintColor()', () => {
    const newPaintColor = new PaintColor(undefined, 'Astorath Red', 'Dry', 'DD482B');

    it('should call the apiService', () => {
      service.createPaintColor(newPaintColor);

      expect(apiService.createPaintColor).toHaveBeenCalledWith(newPaintColor);
    });

    it('should return an Observable', async () => {
      expect(service.createPaintColor(newPaintColor) instanceof Observable).toBe(true);
    });

    it('should contain the proper value within the Observable', (done: DoneFn) => {
      service.createPaintColor(newPaintColor)
        .subscribe(createdPaintColor => {
          expect(createdPaintColor).toBe(newPaintColor);
          done();
        });
    });

  });

  describe('getPaintColorById()', () => {
    const id = '1';

    it('should call the apiService', () => {
      service.getPaintColorById(id);

      expect(apiService.getPaintColorById).toHaveBeenCalledWith(id);
    });

    it('should return an Observable', async () => {
      expect(service.getPaintColorById(id) instanceof Observable).toBe(true);
    });

    it('should contain the proper value within the Observable', (done: DoneFn) => {
      service.getPaintColorById(id)
        .subscribe(returnedPaintColor => {
          expect(returnedPaintColor).toBe(PaintColorsMock.MOCK_PAINT_COLORS[0]);
          done();
        });
    });

  });

  describe('updatePaintColor()', () => {
    const paintColorUpdate = new PaintColor('1', 'Astorath Red', 'Dry', 'DD482B');

    it('should call the apiService', () => {
      service.updatePaintColor(paintColorUpdate);

      expect(apiService.updatePaintColor).toHaveBeenCalledWith(paintColorUpdate);
    });

    it('should return an Observable', async () => {
      expect(service.updatePaintColor(paintColorUpdate) instanceof Observable).toBe(true);
    });

    it('should contain the proper value within the Observable', (done: DoneFn) => {
      service.updatePaintColor(paintColorUpdate)
        .subscribe(updatedPaintColor => {
          expect(updatedPaintColor).toBe(paintColorUpdate);
          done();
        });
    });

  });

  describe('deletePaintColorById()', () => {
    const id = '1';

    it('should call the apiService', () => {
      service.deletePaintColorById(id);

      expect(apiService.deletePaintColorById).toHaveBeenCalledWith(id);
    });

    it('should return an Observable', async () => {
      expect(service.deletePaintColorById(id) instanceof Observable).toBe(true);
    });

    it('should not contain any value within the Observable', (done: DoneFn) => {
      service.deletePaintColorById(id)
        .subscribe(foo => {
          expect(foo).toBeNull();
          done();
        });
    });

  });

});
