import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CarItem} from "../carInformationSlice";
import {CardInterface} from "../../components/Card/Card.interface";

interface CarData {
    data: CarItem
}
export const carAPI = createApi({
    reducerPath: 'carAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://exeed-mospolytech.ru:8000',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Host', `exeed-mospolytech.ru:8000`);
            return headers;
        },
    }),
    tagTypes: ['Car'],
    endpoints: (build) => ({
        fetchCar: build.query<CarData, string>({
            query: (vin) => ({
                url: `/auto/car/${vin}`,
            }),
            providesTags: result => ['Car'],
            extraOptions: {maxRetries: 3},
        })
    })
})
