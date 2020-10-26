import {Component, OnInit} from '@angular/core';
import {PreviousRouteService} from '../../services/previous-route.service';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.scss']
})
export class PresetsComponent implements OnInit {

  lastDest: string;

  constructor(
    private previousRouteService: PreviousRouteService,
  ) {
  }

  ngOnInit() {
    this.lastDest = this.previousRouteService.getPreviousUrl();
    console.log(this.lastDest);
  }

}
