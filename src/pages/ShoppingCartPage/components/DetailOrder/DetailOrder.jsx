import React, {useState, useRef} from 'react';
import styles from './styles.module.scss';
import ProgressBar from '../../../../assets/progress_bar.svg'
import ProgressBarText from '../../../../assets/progress_bar_text.svg'
import Back from '../../../../assets/back.svg'
const DetailOrder = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.first_table}>
                <div className={styles.title}>
                    <img className={styles.back_btn} src={Back} alt="Logo" onClick={props.clickViewDetailBtn}/>
                    <p>MÃ ĐƠN HÀNG: 230716AXWERFINANV</p>
                </div>
                <div className={styles.progress_container}>
                    <div className={styles.status_progress}>
                        <img src={ProgressBar} alt="Logo" />
                        <img src={ProgressBarText} alt="text" />
                    </div>
                </div>
            </div>   

            <div className={styles.second_table}>
                <div className={styles.title}>
                    <p>THÔNG TIN ĐẶT HÀNG</p>
                </div>
                <div className={styles.second_table_main_section}>
                    <div className={styles.left_section}>
                        <p className={styles.bold}>ĐỊA CHỈ ĐẶT HÀNG</p>
                        <div className={styles.box}>
                            <p>NGUYỄN VĂN A | 0344888888</p>
                            <p className={styles.description}>227 Nguyễn Văn Cừ, Phường 1, Quận 3, Thành phố Hồ Chí Minh</p>
                        </div>
                    </div>
                        <div className={styles.right_section}>
                            <p className={styles.bold}>PHƯƠNG THỨC THANH TOÁN</p>
                            <div className={styles.tiny_box}>
                                <p>Thanh toán khi nhận hàng</p>
                            </div>

                            <p className={styles.bold}>HÌNH THỨC GIAO HÀNG</p>
                            <div className={styles.tiny_box}>
                                <p className={styles.yellow}>FAST</p>
                                <p>Thanh toán khi nhận hàng</p>
                                <p>Phí vận chuyển: $2</p>
                            </div>
                        </div>
                    </div>
            </div>   
        </div>
    )
}

export default DetailOrder;