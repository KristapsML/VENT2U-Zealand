import {Component, Input, OnInit} from '@angular/core';
import {PresetDeleteModalComponent} from './preset-delete-modal/preset-delete-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss']
})
export class PresetComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  displaySettings = false;

  @Input() props: {
    preset: object,
    lastDest: string
  };

  openDialog() {
    this.dialog.open(PresetDeleteModalComponent);
  }

  ngOnInit(): void {
  }

}
