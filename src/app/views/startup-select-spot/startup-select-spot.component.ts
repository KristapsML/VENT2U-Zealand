import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StartupSelectSpotModalComponent} from './startup-select-spot-modal/startup-select-spot-modal.component';
import {UsersService} from '../../services/users.service';
import {SpotsService} from '../../services/spots.service';

@Component({
  selector: 'app-startup-select-spot',
  templateUrl: './startup-select-spot.component.html',
  styleUrls: ['./startup-select-spot.component.scss']
})
export class StartupSelectSpotComponent implements OnInit {

  users = {};

  constructor(
    private usersService: UsersService,
    private spotsService: SpotsService,
    public dialog: MatDialog
  ) {
  }

  openDialog() {
    this.dialog.open(StartupSelectSpotModalComponent);
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

  // Updates lastSpotId in the user, and
  // adds the user to userId in the spot
  updateSpot(userId, spotId) {
    // Updates lastSpotId in User
    this.usersService.update(userId, {lastSpotId: spotId})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

    // Updates userId in Spot
    this.spotsService.update(spotId, {userId: userId})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
