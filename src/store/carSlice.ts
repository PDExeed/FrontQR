import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {LX, RX, TXL, VX} from "./data";

export const CART_PERSISTENT_STATE = 'carData'
export interface CarItem {
    vin: string
    mark: string
    model: string
    modelYear?: string
    year: number
    date?: string
    equipment: string
    bodywork: string
    package?: string
    color: string
    department?: string
    finishing: string
    transmission: string
    drive: string
    expenditure: number
    engineCapacity: number
    power: number
    title: string
    description: string
    carts: { title: string, text: string }[],
    price: number,
    image: string,
    image1: string,
    image2: string
}

const initialState: CarItem = {
    vin: '',
    mark: '',
    model: '',
    modelYear: '',
    year: 0,
    date: '',
    equipment: '',
    bodywork: '',
    package: '',
    color: '',
    department: '',
    finishing: '',
    transmission: '',
    drive: '',
    expenditure: 0,
    engineCapacity: 0,
    power: 0,
    title: '',
    description: '',
    carts: [{ title: '', text: '' }],
    price: 0,
    image: '',
    image1: '',
    image2: ''
}
export const getData = createAsyncThunk('http://auto/car/{vin}',
    async (carData: CarItem)=>{
        try{
            const {data} = await axios.get<CarItem>(`/auth/login`)
            return data
        }catch (e){
            if(e instanceof AxiosError)
                throw new Error(e.response?.data.message)
        }

    }
)
const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        get: (state, action: PayloadAction<string>) => {
            switch (action.payload){
                case 'VX': {
                    return {...state ,...VX}
                }
                case 'TXL': {
                    return {...state ,...TXL}
                }
                case 'LX': {
                    return {...state ,...LX}
                }
                case 'RX': {
                    return {...state ,...RX}
                }
            }
        },
        delete: (state, action: PayloadAction<number>) => {
            //state.items = state.items.filter(i => i.id !== action.payload)
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(getData.fulfilled, (state, action)=>{
            if(!action.payload){
                return
            }
            //state.jwt = action.payload.access_token
        })
        builder.addCase(getData.rejected, (state, action)=>{
            //state.loginErrorMessage = action.error.message
        })
    }
})

export default carSlice.reducer
export const cartActions = carSlice.actions