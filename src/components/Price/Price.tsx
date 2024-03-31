import s from "./Price.module.css"
import {PriceInterface} from "./Price.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
export function Price({price}:PriceInterface){
    const data = useSelector((s: RootState)=> s.car)
    return(
        <div className={s.container}>
            <div className={s.text}>стоимость</div>
            <div className={s.price}><span className={s.priceNumber}>{data.price}</span> ₽</div>
        </div>
    )
}