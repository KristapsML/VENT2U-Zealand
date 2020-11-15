import { Component, OnInit } from '@angular/core';
import { SpotsService } from 'app/services/spots.service';

@Component({
  selector: 'app-select-spot-pin-modal',
  templateUrl: './select-spot-pin-modal.component.html',
  styleUrls: ['./select-spot-pin-modal.component.scss']
})
export class SelectSpotPinModalComponent implements OnInit {

  spots = {};

  constructor(
    private spotsService: SpotsService
  ) { }

  ngOnInit(): void {
  }

  updateSpot(userId, spotId) {
    //updates the userId in spots
    this.spotsService.update(spotId, {userId: userId})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

    console.log('updating:', spotId, userId);    
  }
}
