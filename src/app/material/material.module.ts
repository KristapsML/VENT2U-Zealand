import {NgModule} from '@angular/core';

// This module should contain all our imports for Material modules.

// Importing slider module to experiment with customizability
import {MatSliderModule} from '@angular/material/slider';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

// Message: To start with, I have just commented out the modules that were already here -
// only keeping them here for example of how the modules should be added.

// Also! Remember to import the modules like the NgModule^ above

@NgModule({
  imports: [
//    MatButtonModule,
//    MatToolbarModule
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
//    MatButtonModule,
//    MatToolbarModule
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
