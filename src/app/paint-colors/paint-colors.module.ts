import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {PaintColorsRoutingModule} from './paint-colors-routing.module';
import {ShowPaintColorsComponent} from './paint-colors-grid/paint-colors-grid.component';
import {PaintColorService} from './paint-color.service';
import {PaintColorCardComponent} from './paint-color-card/paint-color-card.component';
import {PaintColorApiService} from './paint-color-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PaintColorsRoutingModule
  ],
  declarations: [ShowPaintColorsComponent, PaintColorCardComponent],
  providers: [PaintColorService, PaintColorApiService]
})
export class PaintColorsModule {
}
