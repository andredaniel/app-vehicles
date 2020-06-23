import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements OnInit {
  placa: string = '';
  chassi: string = '';
  renavam: string = '';
  modelo: string = '';
  marca: string = '';
  ano: number = new Date().getFullYear();

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit(): void {}

  registerVehicle() {
    this.vehicleService
      .create({
        placa: this.placa,
        chassi: this.chassi,
        renavam: this.renavam,
        modelo: this.modelo,
        marca: this.marca,
        ano: this.ano,
      })
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
