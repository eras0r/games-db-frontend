import {Component, Input, OnInit} from '@angular/core';

import {PaintColor} from '../paint-color';

@Component({
  selector: 'gdb-paint-color-card',
  templateUrl: './paint-color-card.component.html',
  styleUrls: ['./paint-color-card.component.scss']
})
export class PaintColorCardComponent implements OnInit {

  @Input() paintColor: PaintColor;

  constructor() {
  }

  ngOnInit() {

  }

}
