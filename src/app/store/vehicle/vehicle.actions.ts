import { createAction, props } from '@ngrx/store';
import { CarInfo } from './vehicle.model';

export const getVehicle = createAction(
    'FETCH_VEHICLE',
    props<{ brand: string }>()
);

export const getVehicleSuccess = createAction(
    'FETCH_VEHICLE_SUCCESS',
    props<{ vehicle: CarInfo }>()
);

export const getVehicleFail = createAction(
    'FETCH_VEHICLE_SUCCESS_FAIL',
    props<{ error: any }>()
);
