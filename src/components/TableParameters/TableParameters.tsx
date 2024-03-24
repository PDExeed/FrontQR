import s from './TableParameters.module.css'
export function TableParameters() {
    return(
        <div className={s.table}>
            <table>
                <tbody>
                <tr>
                    <td>Комплектация</td>
                    <td>President LE</td>
                </tr>
                <tr>
                    <td>Кузов</td>
                    <td>Внедорожник</td>
                </tr>
                <tr>
                    <td>Трансмиссия</td>
                    <td>DCT7</td>
                </tr>
                <tr>
                    <td>Привод</td>
                    <td>Полный привод</td>
                </tr>
                <tr>
                    <td>Цвет</td>
                    <td>Эклипс (серебро)</td>
                </tr>
                <tr>
                    <td>Отделка</td>
                    <td>LE</td>
                </tr>
                <tr>
                    <td>VIN</td>
                    <td>LVTDD24B*PD****25</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}