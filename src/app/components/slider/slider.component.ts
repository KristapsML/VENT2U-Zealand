import {Component, Input, OnInit} from '@angular/core';
import { UsersService } from 'app/services/users.service';

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
  userSetting: string;

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

  constructor(private usersService: UsersService) { }

  ngOnInit() {
      this.keepAtRoomLevel = this.props.keepAtRoomLevel;
      console.log(this.keepAtRoomLevel);
      this.retrieveUsers();
      this.userSetting = 'user'.concat(this.props.setting);
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

  disableSlider() {
    this.keepAtRoomLevel = !this.keepAtRoomLevel;
    console.log(this.keepAtRoomLevel);
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
