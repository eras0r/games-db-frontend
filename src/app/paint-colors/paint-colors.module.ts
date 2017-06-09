import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintColorsRoutingModule } from './paint-colors-routing.module';
import { ShowPaintColorsComponent } from './show-paint-colors/show-paint-colors.component';

@NgModule({
  imports: [
    CommonModule,
    PaintColorsRoutingModule
  ],
  declarations: [ShowPaintColorsComponent]
})
export class PaintColorsModule { }
