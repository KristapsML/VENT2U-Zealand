import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {UsersService} from '../../services/users.service';
import {SpotsService} from '../../services/spots.service';
import {PresetsService} from '../../services/presets.service';
import {Router} from '@angular/router';

interface Presets {
  value: string;
  viewValue: string;
}

interface PresetsGroup {
  disabled?: boolean;
  name: string;
  presets: Presets[];
}

@Component({
  selector: 'app-setting-dropdown',
  templateUrl: './setting-dropdown.component.html',
  styleUrls: ['./setting-dropdown.component.scss']
})

export class SettingDropdownComponent implements OnInit {

  selectedPreset: object;

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    private spotsService: SpotsService,
    private presetsService: PresetsService,
    private router: Router) {
  }

  presetsControl = new FormControl();
  users = {};
  presets = {};

  ngOnInit() {
    this.retrieveUsers();
    this.retrievePresets();
  }

  retrieveUsers() {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrievePresets() {
    this.presetsService.getAll()
      .subscribe(
        data => {
          this.presets = data;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateUserSettings(userId) {

    console.log(this.selectedPreset.temperature);

    // Updates Temperature setting in User
    this.usersService.update(userId, {
      userTemperature: this.selectedPreset.temperature,
      userHumidity: this.selectedPreset.humidity,
      userAirflow: this.selectedPreset.airflow
    })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

    window.location.href = window.location.href

  }
}
