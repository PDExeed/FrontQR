import s from "./Price.module.css"
import {PriceInterface} from "./Price.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import carInformation from "../../store/carInformationSlice";
export function Price({price}:PriceInterface){
    const data = useSelector((s: RootState)=> s.carInformation)
    const formatPrice = (price: number)=>{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
    return(
        <div className={s.container}>
            <div className={s.text}>стоимость</div>
            <div className={s.price}><span className={s.priceNumber}>{formatPrice(data.price)}</span> ₽</div>
        </div>
    )
}