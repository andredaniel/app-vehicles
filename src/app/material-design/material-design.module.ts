import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/Button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

const modules: any[] = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatDialogModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialDesignModule {}
