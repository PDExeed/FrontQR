import style from "./DescriptionItem.module.css"

interface DescriptionItemProps {
    image: string,
    description: string
}
export function DescriptionItem({image, description}: DescriptionItemProps) {
    return (
        <div className={style.container}>
            <img src={image} alt="icon"/>
            <div>{description}</div>
        </div>
    )
}