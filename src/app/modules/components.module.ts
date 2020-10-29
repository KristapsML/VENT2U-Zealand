import {NgModule} from '@angular/core';

import {SliderComponent} from '../components/slider/slider.component';
import {TopNavComponent} from '../components/top-nav/top-nav.component';
import {BottomNavComponent} from '../components/bottom-nav/bottom-nav.component';
import {InputWSubmitComponent} from '../components/input-w-submit/input-w-submit.component';
import {PresetComponent} from '../components/preset/preset.component';
import {StartupTimeSuggestionComponent} from '../components/startup-time-suggestion/startup-time-suggestion.component';
import {AppSettingComponent} from '../components/app-setting/app-setting.component';
import {StartupSelectionComponent} from '../components/startup-selection/startup-selection.component';
import {SettingOverviewComponent} from '../components/setting-overview/setting-overview.component';
import {StartupSelectSpotModalComponent} from '../views/startup-select-spot/startup-select-spot-modal/startup-select-spot-modal.component';
import {StartupSelectSettingsModalComponent} from '../views/startup-select-settings/startup-select-settings-modal/startup-select-settings-modal.component';
import {InputWSubmitButtonComponent} from '../components/input-w-submit-button/input-w-submit-button.component';
import {LeaveSpotModalComponent} from '../components/top-nav/leave-spot-modal/leave-spot-modal.component';
import {LogOutModalComponent} from '../components/top-nav/log-out-modal/log-out-modal.component';
import {LoginInfoModalComponent} from '../views/login/login-info-modal/login-info-modal.component';
import {StartupSelectSpotInfoModalComponent} from '../views/startup-select-spot/startup-select-spot-info-modal/startup-select-spot-info-modal.component';
import {StartupSelectSettingsInfoModalComponent} from '../views/startup-select-settings/startup-select-settings-info-modal/startup-select-settings-info-modal.component';
import {ComingSoonModalComponent} from '../components/coming-soon-modal/coming-soon-modal.component';
import {StartupSelectTimeInfoModalComponent} from '../views/startup-select-time/startup-select-time-info-modal/startup-select-time-info-modal.component';
import {StartupOverviewInfoModalComponent} from '../views/startup-overview/startup-overview-info-modal/startup-overview-info-modal.component';
import {CurrentSettingsInfoModalComponent} from '../views/current-settings/current-settings-info-modal/current-settings-info-modal.component';
import {PresetsInfoModalComponent} from '../views/presets/presets-info-modal/presets-info-modal.component';
import {AppSettingsInfoModalComponent} from '../views/app-settings/app-settings-info-modal/app-settings-info-modal.component';
import {SelectSpotInfoModalComponent} from '../views/select-spot/select-spot-info-modal/select-spot-info-modal.component';
import {SettingDropdownComponent} from '../components/setting-dropdown/setting-dropdown.component';
import {SelectSpotPinModalComponent} from '../views/select-spot/select-spot-pin-modal/select-spot-pin-modal.component';
import {SelectSpotQrModalComponent} from '../views/select-spot/select-spot-qr-modal/select-spot-qr-modal.component';
import {SelectSpotQrReaderComponent} from '../components/select-spot-qr-reader/select-spot-qr-reader.component';
import {PresetDeleteModalComponent} from '../components/preset/preset-delete-modal/preset-delete-modal.component';


@NgModule({
  declarations: [
    SliderComponent,
    TopNavComponent,
    BottomNavComponent,
    InputWSubmitComponent,
    PresetComponent,
    StartupTimeSuggestionComponent,
    AppSettingComponent,
    StartupSelectionComponent,
    SettingOverviewComponent,
    StartupSelectSpotModalComponent,
    StartupSelectSettingsModalComponent,
    InputWSubmitButtonComponent,
    LeaveSpotModalComponent,
    LogOutModalComponent,
    LoginInfoModalComponent,
    StartupSelectSpotInfoModalComponent,
    StartupSelectSettingsInfoModalComponent,
    ComingSoonModalComponent,
    StartupSelectTimeInfoModalComponent,
    StartupOverviewInfoModalComponent,
    CurrentSettingsInfoModalComponent,
    PresetsInfoModalComponent,
    AppSettingsInfoModalComponent,
    SelectSpotInfoModalComponent,
    SettingDropdownComponent,
    SelectSpotPinModalComponent,
    SelectSpotQrModalComponent,
    SelectSpotQrReaderComponent,
    PresetDeleteModalComponent
  ],
  exports: [
    SliderComponent,
    TopNavComponent,
    BottomNavComponent,
    InputWSubmitComponent,
    PresetComponent,
    StartupTimeSuggestionComponent,
    AppSettingComponent,
    StartupSelectionComponent,
    SettingOverviewComponent,
    StartupSelectSpotModalComponent,
    StartupSelectSettingsModalComponent,
    InputWSubmitButtonComponent,
    LeaveSpotModalComponent,
    LogOutModalComponent,
    LoginInfoModalComponent,
    StartupSelectSpotInfoModalComponent,
    StartupSelectSettingsInfoModalComponent,
    ComingSoonModalComponent,
    StartupSelectTimeInfoModalComponent,
    StartupOverviewInfoModalComponent,
    CurrentSettingsInfoModalComponent,
    PresetsInfoModalComponent,
    AppSettingsInfoModalComponent,
    SelectSpotInfoModalComponent,
    SettingDropdownComponent,
    SelectSpotPinModalComponent,
    SelectSpotQrModalComponent,
    SelectSpotQrReaderComponent,
    PresetDeleteModalComponent
  ]
})

export class ComponentsModule {
}
