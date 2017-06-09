import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {PaintColorsRoutingModule} from './paint-colors-routing.module';
import {ShowPaintColorsComponent} from './show-paint-colors/show-paint-colors.component';
import {PaintColorService} from './paint-color.service';
import {PaintColorCardComponent} from './paint-color-card/paint-color-card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PaintColorsRoutingModule
  ],
  declarations: [ShowPaintColorsComponent, PaintColorCardComponent],
  providers: [PaintColorService]
})
export class PaintColorsModule {
}
