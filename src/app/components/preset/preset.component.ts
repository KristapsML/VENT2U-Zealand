import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss']
})
export class PresetComponent implements OnInit {

  constructor() { }

  displaySettings = false;

  @Input() props: {
    preset: object
  };

  ngOnInit(): void {
  }

}
