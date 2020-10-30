import {NgModule} from '@angular/core';

// This module should contain all our imports for Material modules.

import {MatSliderModule} from '@angular/material/slider';

// Remember to import the modules like the NgModule^ above

@NgModule({
  imports: [
    MatSliderModule,
  ],
  exports: [
    MatSliderModule,
  ]
})

export class MaterialModule {
}
