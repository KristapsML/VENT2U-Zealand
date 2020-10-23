import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-w-submit-button',
  templateUrl: './input-w-submit-button.component.html',
  styleUrls: ['./input-w-submit-button.component.scss'],
})

export class InputWSubmitButtonComponent implements OnInit {

  constructor() {
  }

  form = new FormGroup({
      timeInput: new FormControl('', Validators.required)
    }
  );

  @Input() props: {
    inputLabel: string,
    placeholder: string,
    buttonText: string,
    routerDest: string
  };

  ngOnInit(): void {
  }

}
