import s from './TitleInformation.module.css'
import {Parameter} from "../Parameter/Parameter";
export function TitleInformation(){
    return(
        <div className={s.background} style={{backgroundImage: 'url("background.png")'}}>
            <div>
                <div className={s.description}>Флагманский премиальный внедорожник</div>
                <div>
                    <div className={s.title}>НОВЫЙ VX</div>
                    <div className={s.information}>
                        <div>President</div>
                        <div>7 мест</div>
                        <div>2023</div>
                    </div>
                </div>
            </div>
            <div className={s.parameters}>
                <div className={s.parametersEl}>
                    <Parameter title='Мощность' parameter={20} image={'thunder.png'}/>
                    <Parameter title='Объем двигателя' parameter={20} image={'speedometer.png'}/>
                </div>
                <div className={s.parametersEl}>
                    <Parameter title='Расход' parameter={20} image={'water-drop.png'}/>
                    <Parameter title='Привод' parameter={20} image={'drive.png'}/>
                </div>
            </div>
        </div>
    )
}