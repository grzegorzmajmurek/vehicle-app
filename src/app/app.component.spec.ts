import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { VehicleFacade } from './store/vehicle/vehicle.facade';
import { SharedModule } from '../shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from './store/vehicle/vehicle.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent
      ],
      imports: [SharedModule],
      providers: [ VehicleFacade, provideMockStore({ initialState: { app: initialState } }) ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
