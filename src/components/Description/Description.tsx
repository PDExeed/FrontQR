import s from './Description.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import cn from "classnames";

export function Description() {
    const data = useSelector((s: RootState) => s.car)
    return (
        <div
            className={cn(s.container, {
                [s.VX]: data.model === 'VX',
                [s.TXL]: data.model === 'TXL',
                [s.LX]: data.model === 'LX',
                [s.RX]: data.model === 'RX',
            })}>
            {data.description}
        </div>
    )
}