import React, {useEffect} from 'react';
import s from './App.module.css'
import {TitleInformation} from "./components/TitleInformation/TitleInformation";
import {Header} from "./components/Header/Header";
import {TableParameters} from "./components/TableParameters/TableParameters";
import {Description} from "./components/Description/Description";
import {BackgroundImage} from "./components/BackgroundImage/BackgroundImage";
import {Cards} from "./components/Cards/Cards";
import {Price} from "./components/Price/Price";
import {Footer} from "./components/Footer/Footer";
import {cartActions} from "./store/carInformationSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/store";
import {Accessories} from "./components/Accessories/Accessories";
import {carAPI} from "./store/services/carSlice";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const {data, isLoading, error} = carAPI.useFetchCarQuery(window.location.href.split('/')[3])
        useEffect(()=>{
            if(data) {
                dispatch(cartActions.setCar(data.data))
                dispatch(cartActions.get(data.data.model))
            }
            dispatch(cartActions.get(window.location.href.split('/')[3]))
            console.log(data)
    }, [data, isLoading])
  return (
    <div>
        <Header/>
        <TitleInformation/>
        <div className={s.descriptionContainer}>
            <TableParameters/>
            <div className={s.hiden}>
                <BackgroundImage/>
            </div>
            <Description/>
        </div>
        <div className={s.container}>
            <BackgroundImage/>
        </div>
        <Cards/>
        <Price price={6700000}/>
        <Accessories/>
        <Footer/>
    </div>
  );
}

export default App;
