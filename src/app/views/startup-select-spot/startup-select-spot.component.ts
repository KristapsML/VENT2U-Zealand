import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StartupSelectSpotModalComponent} from './startup-select-spot-modal/startup-select-spot-modal.component';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-startup-select-spot',
  templateUrl: './startup-select-spot.component.html',
  styleUrls: ['./startup-select-spot.component.scss']
})
export class StartupSelectSpotComponent implements OnInit {

  users = {};

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) {
  }

  openDialog() {
    this.dialog.open(StartupSelectSpotModalComponent);
  }

  ngOnInit() {
    this.retrieveUsers();
    this.currentUser = this.users[1];
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

  updateSpot(userId, spotId) {
    this.usersService.update(userId, {lastSpotId: spotId})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
