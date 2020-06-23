import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteVehicleDialogComponent } from '../delete-vehicle-dialog/delete-vehicle-dialog.component';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: Object;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.vehicleService.getOne(this.id).subscribe((data) => {
      this.vehicle = data;
    });
  }

  deleteVehicleConfirmation(): void {
    const dialogRef = this.dialog.open(DeleteVehicleDialogComponent, {
      data: this.vehicle,
    });

    dialogRef.afterClosed().subscribe((id) => {
      if (id) {
        this.vehicleService.delete(id).subscribe((data) => {
          if (data) {
            this.router.navigate(['/']);
          }
        });
      }
    });
  }
}
