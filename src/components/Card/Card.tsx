import s from "./Card.module.css"
import {CardInterface} from "./Card.interface";
export function Card({title, content}: CardInterface){
    return(
        <div>
            <div className={s.title}>{title}</div>
            <div className={s.content}>{content}</div>
        </div>
    )
}