import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {PaintColorsRoutingModule} from './paint-colors-routing.module';
import {ShowPaintColorsComponent} from './show-paint-colors/show-paint-colors.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PaintColorsRoutingModule
  ],
  declarations: [ShowPaintColorsComponent]
})
export class PaintColorsModule {
}
