import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CarItem} from "../carInformationSlice";


export const carAPI = createApi({
    reducerPath: 'carAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://92.53.70.162:8000',
    }),
    tagTypes: ['Car'],
    endpoints: (build) => ({
        fetchCar: build.query<CarItem, string>({
            query: (vin) => ({
                url: `/auto/car/${vin}`,
            }),
            providesTags: result => ['Car'],
            extraOptions: {maxRetries: 3},
        })
    })
})
