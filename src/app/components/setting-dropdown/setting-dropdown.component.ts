import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Presets {
  value: string;
  viewValue: string;
}

interface PresetsGroup {
  disabled?: boolean;
  name: string;
  presets: Presets[];
}

@Component({
  selector: 'app-setting-dropdown',
  templateUrl: './setting-dropdown.component.html',
  styleUrls: ['./setting-dropdown.component.scss']
})

export class SettingDropdownComponent {

  presetsControl = new FormControl();
  presetsGroups: PresetsGroup[] = [
    {
      name: 'Your presets',
      presets: [
        {value: 'amazon-feeling', viewValue: 'Amazon Feeling'},
        {value: 'my-cold-settings', viewValue: 'My cold settings'}
      ]
    },
    {
      name: 'Standard presets',
      presets: [
        {value: 'this-room', viewValue: 'This room'},
        {value: 'cold-humid', viewValue: 'Cold + humid'},
        {value: 'quick-warm-up', viewValue: 'Quick warm up'}
      ]
    }
  ];
}
