import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent implements OnInit {
  vehicles: Object;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe((data) => {
      this.vehicles = data;
    });
  }
}
