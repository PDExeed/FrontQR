import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CarItem} from "../carInformationSlice";
import {CardInterface} from "../../components/Card/Card.interface";

interface CarData {
    data: CarItem
}
export const carAPI = createApi({
    reducerPath: 'carAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://92.53.70.162:8000',
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
