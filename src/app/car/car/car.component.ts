import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CARS } from '../../core/store/cars';
import { Car } from '../../core/store/models/car.model';
import { CarsService } from '../../core/cars.service';
import { EngineService} from '../engine.service';

@Component({
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarComponent implements OnInit {
  public car: Car;
  public speedClass = 'is-info';
  public batteryClass = 'is-success';
  public rechargedDistance;

  constructor(private route: ActivatedRoute,private cars: CarsService,private engine:EngineService) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = this.cars.getCarByLinkId(carId);
    setInterval(() => this.timeGoesBy(), environment.refreshInterval);
    
  }
  /***
   * ES IMPORTANTE SEPARAR LA LOGICA DE LA CAPA DE PRESENTACION
   * EN EL COMPONENTE SOLO DEBERIA ESTAR LA PRESENTACION POR ESO 
   * HEMOS USADO SERVICIOS QUE CONTINENE LA LOGICA DE ACCESO Y RECUPERACION
   * DE LOS DATOS
   */
  private onBrake = () =>this.engine.brake(this.car);
  private onThrottle = () => this.engine.throttle(this.car);

  /*DOS MANERAS DE DECLARAR LA FUNCION*/
  private onRecharge2(rechargedDistance){
    this.engine.recharge(rechargedDistance,this.car);
  }
  private onRecharge = rechargedDistance => this.engine.recharge(rechargedDistance,this.car);
  /*FIN*/
  public hasBattery = () => this.engine.hasBatery(this.car);
  private timeGoesBy() {
    this.checkSpeed();
    this.checkBattery();
  }
  private checkSpeed = () => this.engine.checkSpeed(this.car);

  private checkBattery = () => this.engine.checkBattery(this.car)

}