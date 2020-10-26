import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  keepAtRoomLevel = null;

  sliderTemperature = 35;
  sliderHumidity = 100;
  sliderAirflow = 10;
  updateSetting(event) {
    this.sliderTemperature = event.value;
    this.sliderHumidity = event.value;
    this.sliderAirflow = event.value;
  }

  @Input() props: {
    title: string,
    unit: string,
    interval: number,
    step: number,
    tempMin: number,
    tempMax: number,
    keepAtRoomLevel: boolean,
    currentValue: number,
    currentRoomValue: number,
    preview: boolean
  };

  constructor() { }

  ngOnInit() {
      this.keepAtRoomLevel = this.props.keepAtRoomLevel;
      console.log(this.keepAtRoomLevel);
  }

  disableSlider() {
    this.keepAtRoomLevel = !this.keepAtRoomLevel;
    console.log(this.keepAtRoomLevel);
  }
}
