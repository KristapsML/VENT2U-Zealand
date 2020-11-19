import {Component, Input, OnInit} from '@angular/core';
import {PresetDeleteModalComponent} from './preset-delete-modal/preset-delete-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {PresetsService} from '../../services/presets.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss']
})
export class PresetComponent implements OnInit {

  users = {};
  presets = {};

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    private presetsService: PresetsService) {
  }

  displaySettings = false;

  @Input() props: {
    presetId: number,
    category: string,
    lastDest: string
  };

  openDialog() {
    this.dialog.open(PresetDeleteModalComponent);
  }

  ngOnInit() {
    this.retrieveUsers();
    this.retrievePresets();
    console.log(this.props.lastDest);
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
        },
        error => {
          console.log(error);
        });
  }

  updateUserSettings(userId) {
    this.presets.forEach(preset => {
      if (preset.presetId === this.props.presetId) {

        this.usersService.update(userId, {
          userTemperature: preset.temperature,
          userHumidity: preset.humidity,
          userAirflow: preset.airflow
        })
          .subscribe(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            });
      }
    });

  }
}
