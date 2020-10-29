import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UsersService} from './services/users.service';
import {StandardPresetsService} from './services/standard-presets.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreviousRouteService} from './services/previous-route.service';
import {ViewsModule} from './modules/views.module';
import {ComponentsModule} from './modules/components.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ViewsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [
    UsersService,
    StandardPresetsService,
    PreviousRouteService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private routerExtService: PreviousRouteService) {
  }
}
