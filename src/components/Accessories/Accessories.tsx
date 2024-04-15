import style from "./Accessories.module.css"
import {AccessoriesCard} from "../AccessoriesCard/AccessoriesCard";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import cn from "classnames";


export function Accessories() {
    const data = useSelector((s: RootState)=> s.carInformation)
    return(
        <div>
            <div className={cn(style.title, {
                [style.LX]: data.model==="LX",
                [style.RX]: data.model==="RX",
                [style.VX]: data.model==="VX"
            })}>АКСЕССУАРЫ</div>
            <div className={style.container}>
                <AccessoriesCard url="https://shop.exeed.ru/catalog/owners/accessories/detyam/plyushevyy_medved_exeed_tdexeed/" title="Плюшевый медведь EXEED" image="accessories1.png" price={1600}/>
                <AccessoriesCard url="https://shop.exeed.ru/catalog/vehicles/zashchita-avtomobilya/zashchita-interera/nakladki_na_porogi_dverey_s_logotipom_exeed_rx_2023_4_sht_exeed0502/" title="Накладки на пороги дверей" image="accessories2.png" price={3740}/>
                <AccessoriesCard url="https://shop.exeed.ru/catalog/vehicles/transportirovka_i_khranenie_/bagazhnik_2/shumoizolyatsiya_bagazhnika_vstavka_pod_zapasnoe_koleso_exeed_txl_m32t_m32tfl_vnedorozhnik_5_dv_exee/" title="Шумоизоляция багажника" image="accessories3.png" price={5950}/>
            </div>
        </div>
    )
}