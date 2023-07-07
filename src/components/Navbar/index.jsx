import styles from './style.module.scss'
import {NotificationsNone, Search, ShoppingCart} from "@material-ui/icons";
import logo from '../../assets/hube_logo.png'
import logotitle from '../../assets/hube_title.png'
import Button from "../Button";
import {Badge} from "@material-ui/core";

const Navbar = () => {
    const { navbarContainer, wrapper, left, center, right, searchContainer, inputStyle, searchStyle, logoContainer, logoImage, logoTitle
    , notificationStyle, shoppingCartStyle, rightContainer } = styles
    return (
        <div className={navbarContainer}>
            <div className={wrapper}>
                <div className={left}>
                    <div className={logoContainer}>
                        <img className={logoImage} src={logo} alt={'logo'}/>
                        <img className={logoTitle} src={logotitle} alt={'logo-title'} height={80} width={90}/>
                    </div>
                </div>
                <div className={center}>
                    <div className={searchContainer}>
                        <input className={inputStyle} placeholder={' What are you looking for?'}/>
                        <Search className={searchStyle}/>
                    </div>
                </div>
                <div className={right}>
                    <div className={rightContainer}>
                        <div>

                            <Badge badgeContent={1} color='secondary' className={notificationStyle}>
                                <NotificationsNone/>
                            </Badge>
                            <Badge badgeContent={2} color='secondary' className={shoppingCartStyle}>
                                <ShoppingCart/>
                            </Badge>
                        </div>
                        <div style={{display: "flex"}}>
                            <Button borderColor={'#8A2BE2'} textColor={'#4B0082'}>Login</Button>
                            <Button borderColor={'#8A2BE2'} backgroundColor={'#8A2BE2'} textColor={'#FFFFFF'}>Register</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;