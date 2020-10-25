import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SelectSpotPinModalComponent } from './select-spot-pin-modal/select-spot-pin-modal.component';
import { SelectSpotQrModalComponent } from './select-spot-qr-modal/select-spot-qr-modal.component';

@Component({
  selector: 'app-select-spot',
  templateUrl: './select-spot.component.html',
  styleUrls: ['./select-spot.component.scss']
})
export class SelectSpotComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialogPin() {
    this.dialog.open(SelectSpotPinModalComponent);
  }

  openDialogQR() {
    this.dialog.open(SelectSpotQrModalComponent);
  }

  ngOnInit(): void {
  }

}
