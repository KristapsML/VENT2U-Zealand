import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from '../views/login/login.component';
import {StartupSelectSpotComponent} from '../views/startup-select-spot/startup-select-spot.component';
import {StartupSelectSettingsComponent} from '../views/startup-select-settings/startup-select-settings.component';
import {StartupSelectTimeComponent} from '../views/startup-select-time/startup-select-time.component';
import {StartupOverviewComponent} from '../views/startup-overview/startup-overview.component';
import {CurrentSettingsComponent} from '../views/current-settings/current-settings.component';
import {SelectSpotComponent} from '../views/select-spot/select-spot.component';
import {AppSettingsComponent} from '../views/app-settings/app-settings.component';
import {PresetsComponent} from '../views/presets/presets.component';
import {TipsTricksComponent} from '../views/tips-tricks/tips-tricks.component';
import {AboutVent2uComponent} from '../views/about-vent2u/about-vent2u.component';

// This holds the route definitions - If the path is empty it will redirect to the home component
// @ts-ignore
const routes: Routes = [
  {path: 'about-vent2u', component: AboutVent2uComponent},
  {path: 'app-settings', component: AppSettingsComponent},
  {path: 'current-settings', component: CurrentSettingsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'presets', component: PresetsComponent},
  {path: 'select-spot', component: SelectSpotComponent},
  {path: 'startup-overview', component: StartupOverviewComponent},
  {path: 'startup-select-settings', component: StartupSelectSettingsComponent},
  {path: 'startup-select-spot', component: StartupSelectSpotComponent},
  {path: 'startup-select-time', component: StartupSelectTimeComponent},
  {path: 'tips-tricks', component: TipsTricksComponent},
  {path: '**', redirectTo: '/login'} // When no route is defined, the app will display the login page.
];

@NgModule({
  declarations: [
    LoginComponent,
    StartupSelectSpotComponent,
    StartupSelectSettingsComponent,
    StartupSelectTimeComponent,
    StartupOverviewComponent,
    CurrentSettingsComponent,
    SelectSpotComponent,
    AppSettingsComponent,
    PresetsComponent,
    TipsTricksComponent,
    AboutVent2uComponent,
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    LoginComponent,
    StartupSelectSpotComponent,
    StartupSelectSettingsComponent,
    StartupSelectTimeComponent,
    StartupOverviewComponent,
    CurrentSettingsComponent,
    SelectSpotComponent,
    AppSettingsComponent,
    PresetsComponent,
    TipsTricksComponent,
    AboutVent2uComponent,
  ]
})

export class ViewsModule {
}
