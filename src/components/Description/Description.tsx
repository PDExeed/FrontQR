import s from './Description.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import cn from "classnames";
import {DescriptionItem} from "../DescriptionItem/DescriptionItem";
import carInformation from "../../store/carInformationSlice";

const ICONS = ['car_icon.png', 'mark_icon.png', 'road_icon.png', 'wheel_icon.png']

export function Description() {
    const data = useSelector((s: RootState) => s.carInformation)
    return (
        <div
            className={cn(s.container, {
                [s.VX]: data.model === 'VX',
                [s.TXL]: data.model === 'TXL',
                [s.LX]: data.model === 'LX',
                [s.RX]: data.model === 'RX',
            })}>
            <div className={s.items}>
                {data.description.map((el, index) => <DescriptionItem image={ICONS[index]} description={el}/>)}
            </div>
        </div>
    )
}