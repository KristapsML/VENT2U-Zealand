import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalWindowComponent} from '../../components/modal-window/modal-window.component';
import {StartupSelectSpotModalComponent} from './startup-select-spot-modal/startup-select-spot-modal.component';

@Component({
  selector: 'app-startup-select-spot',
  templateUrl: './startup-select-spot.component.html',
  styleUrls: ['./startup-select-spot.component.scss']
})
export class StartupSelectSpotComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(StartupSelectSpotModalComponent);
  }

  ngOnInit(): void {
  }

}
