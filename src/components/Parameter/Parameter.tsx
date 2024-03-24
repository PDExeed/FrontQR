import s from "./Parameter.module.css"
import {ParameterInterface} from "./Parameter.interface";

export function Parameter(props: ParameterInterface) {
    return(
        <div className={s.container}>
            <div className={s.title}>{props.title}</div>
            <div className={s.parameter}>
                <img src={props.image} alt='parameter-icon'/>
                <div>{props.parameter}</div>
            </div>
        </div>
    )
}