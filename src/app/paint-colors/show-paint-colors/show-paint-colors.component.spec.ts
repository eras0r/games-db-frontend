import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowPaintColorsComponent} from './show-paint-colors.component';
import {PaintColorService} from '../paint-color.service';
import {MockPaintColorService} from '../mock-paint-color.service';

describe('ShowPaintColorsComponent', () => {
  let component: ShowPaintColorsComponent;
  let fixture: ComponentFixture<ShowPaintColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPaintColorsComponent],
      providers: [{provide: PaintColorService, useClass: MockPaintColorService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPaintColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
   });

});
