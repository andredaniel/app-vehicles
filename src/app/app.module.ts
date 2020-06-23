import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './material-design/material-design.module';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { DeleteVehicleDialogComponent } from './delete-vehicle-dialog/delete-vehicle-dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    VehiclesListComponent,
    VehicleDetailsComponent,
    DeleteVehicleDialogComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
