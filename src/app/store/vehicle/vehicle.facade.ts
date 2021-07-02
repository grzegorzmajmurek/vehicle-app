import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './vehicle.model';
import * as actions from './vehicle.actions';

@Injectable()
export class VehicleFacade {
    public vehicle$ = this.store.select((state) => state.app.vehicle);
    public loading$ = this.store.select((state) => state.app.loading);

    constructor(private store: Store<AppState>) {}

    public getVehicle(brand: string): void {
        this.store.dispatch(actions.getVehicle({ brand }));
    }
}
