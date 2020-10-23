import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StartupSelectSpotModalComponent} from '../../views/startup-select-spot/startup-select-spot-modal/startup-select-spot-modal.component';

@Component({
  selector: 'app-setting-overview',
  templateUrl: './setting-overview.component.html',
  styleUrls: ['./setting-overview.component.scss']
})
export class SettingOverviewComponent implements OnInit {


  constructor() { }

  @Input() props: {
    routerDest: string
  };

  ngOnInit(): void {
  }

}
