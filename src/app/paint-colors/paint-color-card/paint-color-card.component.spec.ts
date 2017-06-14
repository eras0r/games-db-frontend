import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaintColorCardComponent} from './paint-color-card.component';
import {PaintColor} from '../paint-color';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('PaintColorCardComponent', () => {
  let component: PaintColorCardComponent;
  let fixture: ComponentFixture<PaintColorCardComponent>;
  let compiled: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaintColorCardComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PaintColorCardComponent);
    component = fixture.componentInstance;
    component.paintColor = new PaintColor('1', 'Sotek Green', 'Layer', '0B6974');
    fixture.detectChanges();

    compiled = fixture.debugElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name as card-title', () => {
    expect(compiled.query(By.css('h4.card-title')).nativeElement.textContent).toEqual(component.paintColor.getName());
  });

  it('should display the hex color', () => {
    const hexColorListElement = compiled.queryAll(By.css('li.list-group-item'))[0];
    expect(hexColorListElement.children[1].nativeElement.innerHTML).toEqual(component.paintColor.getHexColor());
  });

  it('should display the range', () => {
    const hexColorListElement = compiled.queryAll(By.css('li.list-group-item'))[1];
    expect(hexColorListElement.children[1].nativeElement.innerHTML).toEqual(component.paintColor.getRange());
  });

  it('should use the color as background-color for the card', () => {
    const cardElement = compiled.query(By.css('.card'));
    expect(cardElement.styles['background-color']).toBe('#' + component.paintColor.getHexColor());
  });

});
