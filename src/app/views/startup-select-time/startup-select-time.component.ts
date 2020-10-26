import {Component, OnInit} from '@angular/core';
import {PreviousRouteService} from '../../services/previous-route.service';

@Component({
  selector: 'app-startup-select-time',
  templateUrl: './startup-select-time.component.html',
  styleUrls: ['./startup-select-time.component.scss']
})
export class StartupSelectTimeComponent implements OnInit {

  lastDest: string;
  routerDest: string;

  constructor(
    private previousRouteService: PreviousRouteService
  ) {
  }

  ngOnInit() {
    this.lastDest = this.previousRouteService.getPreviousUrl();
    console.log(this.lastDest);


    if (this.lastDest === '/startup-select-settings') {
      this.routerDest = '/startup-overview';
    } else {
      this.routerDest = '/current-settings';
    }

  }

}
