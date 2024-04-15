import s from './TitleInformation.module.css'
import {Parameter} from "../Parameter/Parameter";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import cn from "classnames"
import carInformation from "../../store/carInformationSlice";
export function TitleInformation(){
    const data = useSelector((s: RootState)=> s.carInformation)
    console.log(data)
    return(
        <div className={s.background} style={{backgroundImage: `url("${data.image}")`}}>
            <div className={cn({
                [s.LX]: data.model==='LX',
                [s.RX]: data.model==='RX',
            })}>
                <div className={s.description}>{data.title}</div>
                <div>
                    <div className={s.title}>{`${data.mark} ${data.model}`}</div>
                    <div className={s.information}>
                        <div>{data.equipment}</div>
                        <div>{data.year}</div>
                    </div>
                </div>
            </div>
            <div className={s.parameters}>
                <div className={s.parametersEl}>
                    <Parameter title='Мощность' parameter={`${data.power} л. с.`} image={'thunder.png'}/>
                    <Parameter title='Объем двигателя' parameter={`${data.engineCapacity} л`} image={'speedometer.png'}/>
                </div>
                <div className={s.parametersEl}>
                    <Parameter title='Расход' parameter={`${data.expenditure} л`} image={'water-drop.png'}/>
                    <Parameter title='Привод' parameter={`${data.drive}`} image={'drive.png'}/>
                </div>
            </div>
        </div>
    )
}