import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: VehiclesListComponent },
  { path: 'add', component: VehicleFormComponent },
  { path: 'vehicle/:id', component: VehicleDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
