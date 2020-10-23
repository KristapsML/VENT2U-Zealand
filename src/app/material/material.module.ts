import {NgModule} from '@angular/core';

// This module should contain all our imports for Material modules.

// Importing slider module to experiment with customizability
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';


// Message: To start with, I have just commented out the modules that were already here -
// only keeping them here for example of how the modules should be added.

// Also! Remember to import the modules like the NgModule^ above

@NgModule({
  imports: [
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  exports: [
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {
}
