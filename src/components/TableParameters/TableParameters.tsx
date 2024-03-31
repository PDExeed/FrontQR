import s from './TableParameters.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
export function TableParameters() {
    const data = useSelector((s: RootState)=> s.car)
    return(
        <div className={s.table}>
            <table>
                <tbody>
                <tr>
                    <td>Комплектация</td>
                    <td>{data.equipment}</td>
                </tr>
                <tr>
                    <td>Кузов</td>
                    <td>{data.bodywork}</td>
                </tr>
                <tr>
                    <td>Трансмиссия</td>
                    <td>{data.transmission}</td>
                </tr>
                <tr>
                    <td>Привод</td>
                    <td>{data.drive}</td>
                </tr>
                <tr>
                    <td>Цвет</td>
                    <td>{data.color}</td>
                </tr>
                <tr>
                    <td>Отделка</td>
                    <td>{data.finishing}</td>
                </tr>
                <tr>
                    <td>VIN</td>
                    <td>{data.vin}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}