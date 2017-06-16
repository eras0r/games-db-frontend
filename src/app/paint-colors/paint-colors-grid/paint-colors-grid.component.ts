import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {PaintColorService} from '../paint-color.service';
import {PaintColor} from '../paint-color';

@Component({
  selector: 'gdb-paint-colors-grid',
  templateUrl: './paint-colors-grid.component.html',
  styleUrls: ['./paint-colors-grid.component.scss']
})
export class PaintColorsGridComponent implements OnInit {

  public paintColors: Observable<PaintColor[]>;

  constructor(private paintColorService: PaintColorService) {

  }

  ngOnInit() {
    this.paintColors = this.loadPaintColors();
  }

  loadPaintColors(): Observable<PaintColor[]> {
    return this.paintColorService.getPaintColors();
  }

}
