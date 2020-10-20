import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
// Importing HomeComponent to test routing - we can rename it according to our need
import { HomeComponent } from './views/home/home.component';
// Importing SliderComponent to experiment with sliders in app
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './views/login/login.component';
import { StartupSelectSpotComponent } from './views/startup-select-spot/startup-select-spot.component';
import { StartupSelectSettingsComponent } from './views/startup-select-settings/startup-select-settings.component';
import { StartupSelectTimeComponent } from './views/startup-select-time/startup-select-time.component';
import { StartupOverviewComponent } from './views/startup-overview/startup-overview.component';
import { CurrentSettingsComponent } from './views/current-settings/current-settings.component';
import { SelectSpotComponent } from './views/select-spot/select-spot.component';
import { AppSettingsComponent } from './views/app-settings/app-settings.component';
import { PresetsComponent } from './views/presets/presets.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavLiComponent } from './components/nav-li/nav-li.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { InputWSubmitComponent } from './components/input-w-submit/input-w-submit.component';
import { PresetComponent } from './components/preset/preset.component';
import { StartupTimeSuggestionComponent } from './components/startup-time-suggestion/startup-time-suggestion.component';
import { AppSettingComponent } from './components/app-setting/app-setting.component';
import {MatToolbarModule} from '@angular/material/toolbar';

// This holds the route definitions - If the path is empty it will redirect to the home component
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    LoginComponent,
    StartupSelectSpotComponent,
    StartupSelectSettingsComponent,
    StartupSelectTimeComponent,
    StartupOverviewComponent,
    CurrentSettingsComponent,
    SelectSpotComponent,
    AppSettingsComponent,
    PresetsComponent,
    MainNavComponent,
    NavLiComponent,
    ModalWindowComponent,
    TopNavComponent,
    BottomNavComponent,
    InputWSubmitComponent,
    PresetComponent,
    StartupTimeSuggestionComponent,
    AppSettingComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
