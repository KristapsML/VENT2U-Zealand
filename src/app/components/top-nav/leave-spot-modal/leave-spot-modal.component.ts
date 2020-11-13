import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {SpotsService} from '../../../services/spots.service';

@Component({
  selector: 'app-leave-spot-modal',
  templateUrl: './leave-spot-modal.component.html',
  styleUrls: ['./leave-spot-modal.component.scss']
})
export class LeaveSpotModalComponent implements OnInit {

  users = {};

  constructor(private spotsService: SpotsService,
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
          console.log("Users!", this.users);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateSpot(spotId) {
    // Removes userId from the Spot
    console.log(spotId);
    this.spotsService.update(spotId, {userId: null})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
