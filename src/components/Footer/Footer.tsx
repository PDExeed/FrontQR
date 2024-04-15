import s from "./Footer.module.css"
export function Footer(){
    return(
        <div className={s.container}>
            <div className={s.exeed}>EXEED</div>
            <div className={s.links}>
                <a href='https://vk.com/exeedru'><img src='VK.png' alt='vk'/></a>
                <a href='https://t.me/exeedrussiaclub'><img src='Telegram.png' alt='telegram'/></a>
                <a href='https://www.youtube.com/channel/UCvcyIs3g-WpafDNQToiWxow'> <img src='Youtube.png' alt='youtube'/></a>
            </div>
            <div className={s.text}>© 2024 Филиал EXEED Cars Rus</div>
        </div>
    )
}