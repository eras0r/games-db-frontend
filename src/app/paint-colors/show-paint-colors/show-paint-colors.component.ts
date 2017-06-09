import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {PaintColorService} from '../paint-color.service';
import {PaintColor} from '../paint-color';

@Component({
  selector: 'app-show-paint-colors',
  templateUrl: './show-paint-colors.component.html',
  styleUrls: ['./show-paint-colors.component.scss']
})
export class ShowPaintColorsComponent implements OnInit {

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
