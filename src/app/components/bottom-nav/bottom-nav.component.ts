import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoginInfoModalComponent} from '../../views/login/login-info-modal/login-info-modal.component';
import {StartupSelectSpotInfoModalComponent} from '../../views/startup-select-spot/startup-select-spot-info-modal/startup-select-spot-info-modal.component';
import {ComingSoonModalComponent} from '../coming-soon-modal/coming-soon-modal.component';
import {StartupSelectTimeInfoModalComponent} from '../../views/startup-select-time/startup-select-time-info-modal/startup-select-time-info-modal.component';
import {CurrentSettingsInfoModalComponent} from '../../views/current-settings/current-settings-info-modal/current-settings-info-modal.component';
import {PresetsInfoModalComponent} from '../../views/presets/presets-info-modal/presets-info-modal.component';
import {AppSettingsInfoModalComponent} from '../../views/app-settings/app-settings-info-modal/app-settings-info-modal.component';
import {SelectSpotInfoModalComponent} from '../../views/select-spot/select-spot-info-modal/select-spot-info-modal.component';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  displayBackButton = true;
  routerPath = '';

  constructor(
    private location: Location,
    private router: Router,
    public dialog: MatDialog) {
  }

  previousPage() {
    this.location.back();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // Checking if the back button should be displayed
      this.displayBackButton = this.location.path() !== '/login';
      this.routerPath = this.location.path();
    });
  }

  openDialog() {
    console.log(this.routerPath);

    if (this.routerPath === '/login') {
      this.dialog.open(LoginInfoModalComponent);
    }
    else if (this.routerPath === '/startup-select-spot') {
      this.dialog.open(StartupSelectSpotInfoModalComponent);
    }
    else if (this.routerPath === '/startup-select-time') {
      this.dialog.open(StartupSelectTimeInfoModalComponent);
    }
    else if (this.routerPath === '/current-settings') {
      this.dialog.open(CurrentSettingsInfoModalComponent);
    }
    else if (this.routerPath === '/presets') {
      this.dialog.open(PresetsInfoModalComponent);
    }
    else if (this.routerPath === '/app-settings') {
      this.dialog.open(AppSettingsInfoModalComponent);
    }
    else if (this.routerPath === '/select-spot') {
      this.dialog.open(SelectSpotInfoModalComponent);
    }
    else {
      this.dialog.open(ComingSoonModalComponent);
    }
  }

}
