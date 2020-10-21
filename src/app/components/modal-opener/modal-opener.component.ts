import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalWindowComponent} from '../modal-window/modal-window.component';

@Component({
  selector: 'app-modal-opener',
  templateUrl: './modal-opener.component.html',
  styleUrls: ['./modal-opener.component.scss']
})
export class ModalOpenerComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(ModalWindowComponent);
  }

  ngOnInit(): void {
  }

}
