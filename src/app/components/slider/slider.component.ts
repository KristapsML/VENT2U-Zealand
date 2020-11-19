import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from 'app/services/users.service';
import {SpotsService} from 'app/services/spots.service';
import {PresetsService} from '../../services/presets.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  users = {};
  settingValue: number;
  toggleValue: boolean;
  keepAtRoomLevel = null;

  spots = {};
  spotValue: number;

  presets = {};

  // Props for changing the setting in user- and spot tables
  userSetting: string;
  spotSetting: string;
  presetSetting: string;

  @Input() props: {
    setting: string,
    unit: string,
    interval: number,
    step: number,
    tempMin: number,
    tempMax: number,
    keepAtRoomLevel: boolean,
    currentValue: number,
    currentRoomValue: number,
    preview: boolean,
    presetId: number
  };

  constructor(
    private usersService: UsersService,
    private spotsService: SpotsService,
    private presetService: PresetsService
  ) {
  }

  ngOnInit() {
    this.retrieveUsers();
    this.userSetting = 'user'.concat(this.props.setting);
    this.retrieveSpots();
    this.spotSetting = 'curr'.concat(this.props.setting);
    this.retrievePresets();
    this.presetSetting = this.props.setting.toLowerCase();
  }

  retrieveUsers() {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;

          if (this.props.preview === false) {
            this.settingValue = this.users[0][this.userSetting];
            this.toggleValue = this.users[0][this.userSetting];

            if (this.settingValue === null) {
              this.keepAtRoomLevel = true;
            }

          }

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveSpots() {
    this.spotsService.getAll()
      .subscribe(
        data => {
          this.spots = data;
          this.spotValue = this.spots[0][this.spotSetting];

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrievePresets() {
    this.presetService.getAll()
      .subscribe(
        data => {
          this.presets = data;

          if (this.props.preview === true) {
            this.presets.forEach(preset => {
              if (preset.presetId === this.props.presetId) {
                this.settingValue = preset[this.presetSetting];
              }
            });
          }

          if (this.settingValue === null) {
            this.keepAtRoomLevel = true;
          }

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateSetting(userId) {
    // Updates setting in User
    this.usersService.update(userId, {[this.userSetting]: this.settingValue})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
