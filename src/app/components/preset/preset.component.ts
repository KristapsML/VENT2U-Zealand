import {Component, Input, OnInit} from '@angular/core';
import {PresetDeleteModalComponent} from './preset-delete-modal/preset-delete-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {PresetsService} from '../../services/presets.service';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss']
})
export class PresetComponent implements OnInit {

  presets = {};

  constructor(
    public dialog: MatDialog,
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
    this.retrievePresets();
    console.log(this.props.lastDest);
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
