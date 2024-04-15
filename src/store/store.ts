import {combineReducers, configureStore} from "@reduxjs/toolkit";
import carInformation from "./carInformationSlice";
import {carAPI} from "./services/carSlice";

const rootReducer = combineReducers({
    carInformation,
    [carAPI.reducerPath]: carAPI.reducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(carAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch