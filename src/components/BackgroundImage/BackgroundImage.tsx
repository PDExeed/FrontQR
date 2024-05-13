import s from "./BackgroundImage.module.css"
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export function BackgroundImage() {
    const data = useSelector((s: RootState)=> s.carInformation)
    return(
        <div style={{backgroundImage: `url("${data.image2}")`}} className={s.backgroundImage}><div className={s.hidden}>l</div></div>
    )
}