import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { SpotsService } from 'app/services/spots.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-input-w-submit-button',
  templateUrl: './input-w-submit-button.component.html',
  styleUrls: ['./input-w-submit-button.component.scss'],
})

export class InputWSubmitButtonComponent implements OnInit {

  inputValue: string;

  users = {};
  spots = {};

  constructor(
    private usersService: UsersService,
    private spotsService: SpotsService
    ) {
  }

  form = new FormGroup({
      timeInput: new FormControl('', Validators.required)
    }
  );

  @Input() props: {
    inputLabel: string,
    placeholder: string,
    buttonText: string,
    routerDest: string,
    clickFunction: string
  };

  ngOnInit() {
    this.retrieveUsers();
    this.retrieveSpots();
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

  retrieveSpots() {
    this.spotsService.getAll()
    .subscribe(
    data => {
      this.spots = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
    
  }

  updateSpot(userId, spotId) {
    //updates the userId in spots
    this.spotsService.update(spotId, {userId: userId})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

    console.log('updating:', spotId, userId);    
  }
}
