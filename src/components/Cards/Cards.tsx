import s from "./Cards.module.css"
import {Card} from "../Card/Card";
import Flickity from "react-flickity-component";
import "./Slider.css"
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
const flickityOptions = {
    initialIndex: 0
}
export function Cards() {
    const data = useSelector((s: RootState)=> s.car)
    return(
        <div>
            <div className={s.title}>{`${data.mark} ${data.model} это:`}</div>
            <div style={{backgroundImage: 'url("Vector.png")'}} className={s.border}>
                {window.innerWidth <= 650 &&<Flickity className={s.slider} elementType='div' disableImagesLoaded={false} options={flickityOptions} reloadOnUpdate static>
                    {data.carts.map((el, ind)=><Card key={ind} title={el.title} content={el.text}></Card>)}
                </Flickity>}

                {window.innerWidth > 650 && <div className={s.container}>
                    {data.carts.map((el, ind)=><Card key={ind} title={el.title} content={el.text}></Card>)}
                </div>}
            </div>
        </div>
    )
}