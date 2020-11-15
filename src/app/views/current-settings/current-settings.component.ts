import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'app/services/users.service';
import { ComingSoonModalComponent } from '../../components/coming-soon-modal/coming-soon-modal.component';

@Component({
  selector: 'app-current-settings',
  templateUrl: './current-settings.component.html',
  styleUrls: ['./current-settings.component.scss']
})
export class CurrentSettingsComponent implements OnInit {
  constructor(public dialog: MatDialog, private usersService: UsersService) {
  }

  users = {};

  openDialog() {
    this.dialog.open(ComingSoonModalComponent);
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

}
