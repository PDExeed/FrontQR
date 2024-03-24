import s from "./Price.module.css"
import {PriceInterface} from "./Price.interface";
export function Price({price}:PriceInterface){
    return(
        <div className={s.container}>
            <div className={s.text}>стоимость</div>
            <div className={s.price}><span className={s.priceNumber}>6 700 000</span> ₽</div>
        </div>
    )
}