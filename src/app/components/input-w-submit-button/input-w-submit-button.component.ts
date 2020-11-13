import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-input-w-submit-button',
  templateUrl: './input-w-submit-button.component.html',
  styleUrls: ['./input-w-submit-button.component.scss'],
})

export class InputWSubmitButtonComponent implements OnInit {

  inputValue: string;

  users = {};

  constructor(
    private usersService: UsersService) {
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
