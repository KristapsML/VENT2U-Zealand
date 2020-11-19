import {Component, Input, OnInit} from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { SpotsService } from 'app/services/spots.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  users = {};
  settingValue: number;
  userSetting: string;
  toggleValue: boolean;
  keepAtRoomLevel = null;

  spots = {};
  spotValue: number;
  spotSetting: string;

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
    preview: boolean
  };

  constructor(private usersService: UsersService, private spotsService: SpotsService) { }

  ngOnInit() {
      this.retrieveUsers();
      this.userSetting = 'user'.concat(this.props.setting);
      this.retrieveSpots();
      this.spotSetting = 'curr'.concat(this.props.setting);
  }

  retrieveUsers() {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;
          this.settingValue = this.users[0][this.userSetting];
          this.toggleValue = this.users[0][this.userSetting];

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
