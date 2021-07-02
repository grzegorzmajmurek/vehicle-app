import { Component} from '@angular/core';
import { VehicleFacade } from '../store/vehicle/vehicle.facade';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public vehicle$ = this.vehicleFacade.vehicle$;
  public loading$ = this.vehicleFacade.loading$;
  public displayedColumns: string[] = ['Make_ID' , 'Make_Name', 'Model_ID', 'Model_Name'];
  public carList = ['honda', 'bmw', 'mazda', 'volvo'];
  public selectedCar = null;
  constructor(private vehicleFacade: VehicleFacade) { }

  public getCars(): void {
    this.vehicleFacade.getVehicle(this.selectedCar);
  }
}
