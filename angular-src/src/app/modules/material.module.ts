import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule {}
