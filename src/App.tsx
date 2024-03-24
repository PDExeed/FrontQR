import React from 'react';
import s from './App.module.css'
import {TitleInformation} from "./components/TitleInformation/TitleInformation";
import {Header} from "./components/Header/Header";
import {TableParameters} from "./components/TableParameters/TableParameters";
import {Description} from "./components/Description/Description";
import {BackgroundImage} from "./components/BackgroundImage/BackgroundImage";
import {Cards} from "./components/Cards/Cards";
import {Price} from "./components/Price/Price";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div>
        <Header/>
        <TitleInformation/>
        <div className={s.decriptionContainer}>
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
        <Footer/>
    </div>
  );
}

export default App;
