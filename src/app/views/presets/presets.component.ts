import {Component, OnInit} from '@angular/core';
import {PreviousRouteService} from '../../services/previous-route.service';
import {UsersService} from '../../services/users.service';
import {SpotsService} from '../../services/spots.service';
import {PresetsService} from '../../services/presets.service';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.scss']
})
export class PresetsComponent implements OnInit {

  lastDest: string;
  users = {};
  presets = {};

  constructor(
    private previousRouteService: PreviousRouteService,
    private usersService: UsersService,
    private presetsService: PresetsService
  ) {
  }

  ngOnInit() {
    this.lastDest = this.previousRouteService.getPreviousUrl();
    this.retrieveUsers();
    this.retrievePresets();
    console.log(this.lastDest);
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
