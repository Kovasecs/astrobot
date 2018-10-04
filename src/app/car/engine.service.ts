import { Injectable } from '@angular/core';
import { Car } from '../core/store/models/car.model';
import { environment } from '../../environments/environment';

@Injectable()

export class EngineService {
public oneHour:number = 3600;
  constructor() { }

  public checkSpeed(car :Car){
    if(car.currentSpeed <= 1){
      car.currentSpeed = 0;
    }
  }
  public hasBatery = (car:Car):boolean => car.remainingBattery > 0;

  public brake(car:Car){
    car.currentSpeed -=1 + (car.topSpeed - car.currentSpeed) /10;
  }
  public throttle(car:Car){
    car.currentSpeed +=1 + (car.topSpeed - car.currentSpeed) /10;
  }
  public recharge(rechargedDistance:number, car:Car) {
    if (!rechargedDistance || rechargedDistance < 0) {
      return;
    }
    if (rechargedDistance > car.totalBattery) {
      rechargedDistance = car.totalBattery;
    }
    car.remainingBattery = rechargedDistance;
    }
  public checkBattery(car:Car) {
    switch (true) {
      case car.remainingBattery <= car.currentSpeed:
        this.stopCar(car);
        break;
      case car.remainingBattery <= environment.dangerKmsBattery:
        //this.batteryClass = 'is-danger';
        this.travelDistance(car);
        break;
      case car.remainingBattery <= environment.warningKmsBattery:
        //this.batteryClass = 'is-warning';
        this.travelDistance(car);
        break;
      default:
       // this.batteryClass = 'is-success';
        this.travelDistance(car);
        break;
    }
  }
  public stopCar(car:Car){
    car.currentSpeed = 0;
    car.distanceTraveled += car.remainingBattery;
    car.remainingBattery = 0;
  }
  public travelDistance(car:Car){
    // car.distanceTraveled += (car.currentSpeed / this.oneHour) * environment.timeTravel;
    // car.remainingBattery -= (car.currentSpeed / this.oneHour) * environment.timeTravel;
    car.distanceTraveled += car.currentSpeed;
    car.remainingBattery -= car.currentSpeed;
  }
}
