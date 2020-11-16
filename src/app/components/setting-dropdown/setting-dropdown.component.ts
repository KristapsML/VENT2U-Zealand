import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {UsersService} from '../../services/users.service';
import {SpotsService} from '../../services/spots.service';
import {PresetsService} from '../../services/presets.service';

interface Presets {
  value: string;
  viewValue: string;
}

interface PresetsGroup {
  disabled?: boolean;
  name: string;
  presets: Presets[];
}

@Component({
  selector: 'app-setting-dropdown',
  templateUrl: './setting-dropdown.component.html',
  styleUrls: ['./setting-dropdown.component.scss']
})

export class SettingDropdownComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    private spotsService: SpotsService,
    private presetsService: PresetsService) {
  }

  presetsControl = new FormControl();
  users = {};
  presets = {};

  ngOnInit() {
    this.retrieveUsers();
    this.retrievePresets();
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

  retrievePresets() {
    this.presetsService.getAll()
      .subscribe(
        data => {
          this.presets = data;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
