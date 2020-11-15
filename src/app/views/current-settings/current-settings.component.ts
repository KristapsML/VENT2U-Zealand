import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'app/services/users.service';
import { SpotsService } from 'app/services/spots.service';
import { ComingSoonModalComponent } from '../../components/coming-soon-modal/coming-soon-modal.component';

@Component({
  selector: 'app-current-settings',
  templateUrl: './current-settings.component.html',
  styleUrls: ['./current-settings.component.scss']
})
export class CurrentSettingsComponent implements OnInit {
  constructor(public dialog: MatDialog, private usersService: UsersService, private spotsService: SpotsService) {
  }

  users = {};
  spots = {};

  openDialog() {
    this.dialog.open(ComingSoonModalComponent);
  }

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

}
