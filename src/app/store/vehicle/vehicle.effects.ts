import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpService } from '../../http/http.service';
import * as fromActions from './vehicle.actions';

@Injectable()
export class VehicleEffects {
    constructor(private actions$: Actions, private httpService: HttpService) {}

    getVehicle$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.getVehicle),
        switchMap(({ brand }) =>
            this.httpService.VehicleDetails(brand).pipe(
                map((vehicle) => fromActions.getVehicleSuccess({ vehicle })),
                catchError((error) => [fromActions.getVehicleFail({ error })]))
        )
        )
    );
}
