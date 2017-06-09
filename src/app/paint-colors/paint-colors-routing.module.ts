import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowPaintColorsComponent} from './show-paint-colors/show-paint-colors.component';

const routes: Routes = [
  {
    path: 'paint-colors',
    component: ShowPaintColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintColorsRoutingModule {

}
