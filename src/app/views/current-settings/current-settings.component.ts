import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ComingSoonModalComponent} from '../../components/coming-soon-modal/coming-soon-modal.component';

@Component({
  selector: 'app-current-settings',
  templateUrl: './current-settings.component.html',
  styleUrls: ['./current-settings.component.scss']
})
export class CurrentSettingsComponent implements OnInit {
  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(ComingSoonModalComponent);
  }

  ngOnInit(): void {
  }

}
