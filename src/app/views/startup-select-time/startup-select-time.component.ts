import {Component, OnInit} from '@angular/core';
import {PreviousRouteService} from '../../services/previous-route.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-startup-select-time',
  templateUrl: './startup-select-time.component.html',
  styleUrls: ['./startup-select-time.component.scss']
})
export class StartupSelectTimeComponent implements OnInit {

  lastDest: string;
  routerDest: string;

  timeSuggestions = ['11:30', '13:00', '13:55', '14:50'];
  users = {};

  constructor(
    private usersService: UsersService,
    private previousRouteService: PreviousRouteService
  ) {
  }

  ngOnInit() {
    this.retrieveUsers();
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

  updateTime(userId, time) {
    // Updates leavingTime in User
    this.usersService.update(userId, {leavingTime: time})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

    console.log('updating:', userId, time);
  }
}
