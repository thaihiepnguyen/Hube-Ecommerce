import React, {useState} from 'react';
import styles from './styles.module.scss';
import Box from './Box';
import ShopPhoto from '../../../../src/assets/shop.png';

const Shop = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Your Shop Information</div>
            <div className={styles.main_section}>
                <div className={styles.left_section}>
                    <Box
                        name="Shop name"
                        note="Please put the name in accordance with regulations"
                        type="0"/>
                    <div className={styles.instruction}>
                        <div>
                            To avoid an unfortunate rejection of your application, please name your store according to the following regulations:
                        </div>
                        <ul>
                            <li>Do not contain misleading keywords for quality (e.g. best, cheapest, etc.), local, local (e.g. Ho Chi Minh, Da Nang, Hanoi, etc.), region (e.g. North, Central, South, etc.) or country name (e.g. Vietnam, Korea, Japan, etc.)</li>
                            <li>Do not contain the same name as the registered trademark on Hube. For store names containing protected trademarks (e.g. Apple, Samsung, etc.) a trademark authorization/certificate must be provided after creating an account</li>
                        </ul>
                    </div>
                    <Box
                        name="Shop URL"
                        note="This is the automatically generated expected URL. Once the stall name is approved, the official URL will be updated here."
                        type="0"
                        />
                    <Box
                        name="Shop Logo"
                        note="Dimensions: 320 x 320 px I JPEG, JPG I Up to 2MB
                        (Can be updated after completing the profile, in the Booth Decoration section)."
                        type="1"
                        />
                </div>
                <div className={styles.right_section}>
                    <div>Simulation image on the booth page</div>
                    <img className={styles.shop_photo} src={ShopPhoto} alt='shop photo' />
                </div>
            </div>
        </div>
    )
}

export default Shop;