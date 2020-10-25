import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  sliderTemperature = 40;
  sliderHumidity = 100;
  sliderAirflow = 10;
  updateSetting(event) {
    this.sliderTemperature = event.value;
    this.sliderHumidity = event.value;
    this.sliderAirflow = event.value;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
