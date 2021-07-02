import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './vehicle.actions';
import { initialState } from './vehicle.model';

const reducer = createReducer(
    initialState,
    on(actions.getVehicle, (state) => ({
        ...state,
        loading: true
    })),
    on(actions.getVehicleSuccess, (state, { vehicle }) => ({
        ...state,
        vehicle: vehicle.Results,
        loading: false
    }))
);

export function VehicleReducer(
    state: any | undefined,
    action: Action
): any {
    return reducer(state, action);
}
