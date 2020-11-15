import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent implements OnInit {

  toggleValue: boolean;

  @Input() props: {
    setting: string
  };

  users = {};

  constructor(
    private usersService: UsersService) {
  }

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;

          // Sets the toggle value so it is equal to value in database
          this.toggleValue = this.users[0][this.props.setting];

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateSetting(userId) {
    // Updates setting in User
    this.usersService.update(userId, {[this.props.setting]: this.toggleValue})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
