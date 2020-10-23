import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StartupSelectSettingsModalComponent} from './startup-select-settings-modal/startup-select-settings-modal.component';

@Component({
  selector: 'app-startup-select-settings',
  templateUrl: './startup-select-settings.component.html',
  styleUrls: ['./startup-select-settings.component.scss']
})
export class StartupSelectSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(StartupSelectSettingsModalComponent);
  }

  ngOnInit(): void {
  }

}
