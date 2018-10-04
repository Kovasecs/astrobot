import { Injectable } from '@angular/core';
import { CARS } from './store/cars';
import { Car } from './store/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private cars: Car[] = CARS;

  constructor() { }

  public getCars = ()=> this.cars;

//DOS FORMAS DE OBTENER EL CAR por medio de la url 
  public getCarByLinkId = carId => this.cars.find(c => c.link.caption === carId);

  public gatCarsByLinkId2 (carId){
     return  this.cars.find(c => c.link.caption === carId);
  }
}
