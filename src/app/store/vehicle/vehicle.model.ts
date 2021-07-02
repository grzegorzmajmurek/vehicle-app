export interface CarInfo {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: Results[];
}

export interface Results {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
}

export interface AppState {
    app: VehicleState;
}

export interface VehicleState {
    vehicle: Results[];
    loading: boolean;
}

export const initialState: VehicleState = {
    vehicle : [],
    loading: false
}
