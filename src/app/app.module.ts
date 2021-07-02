import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleEffects } from './store/vehicle/vehicle.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VehicleReducer } from './store/vehicle/vehicle.reducer';
import { VehicleFacade } from './store/vehicle/vehicle.facade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([VehicleEffects]),
    StoreModule.forRoot({app: VehicleReducer}),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [VehicleEffects, VehicleFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
