import s from "./BackgroundImage.module.css"
import React from "react";

export function BackgroundImage() {
    return(
        <div style={{backgroundImage: 'url("image2.png")'}} className={s.backgroundImage}><div className={s.hidden}>l</div></div>
    )
}