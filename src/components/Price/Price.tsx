import s from "./Price.module.css"
import {PriceInterface} from "./Price.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import carInformation from "../../store/carInformationSlice";
export function Price({price}:PriceInterface){
    const data = useSelector((s: RootState)=> s.carInformation)
    return(
        <div className={s.container}>
            <div className={s.text}>стоимость</div>
            <div className={s.price}><span className={s.priceNumber}>{data.price}</span> ₽</div>
        </div>
    )
}