import style from "./AccessoriesCard.module.css"

interface AccessoriesCardProps {
    image: string,
    title: string,
    price: number,
    url: string
}

export function AccessoriesCard(props: AccessoriesCardProps) {
    return (
        <a href={props.url} style={{backgroundImage: `url(${props.image})`}} className={style.container}>
            <div className={style.information}>
                <div>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.price}>{props.price} ₽</div>
                </div>
                <div className={style.arrowsRightUp}></div>
            </div>
        </a>
    )
}