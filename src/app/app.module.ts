import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {PaintColorsModule} from './paint-colors/paint-colors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    PaintColorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
