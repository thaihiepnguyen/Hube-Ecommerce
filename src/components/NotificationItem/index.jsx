import styles from './style.module.scss'
import {AccountCircle} from "@material-ui/icons";

const NotificationItem = (props) => {
  const {content} = props
  return (
    <>
      <div className={styles.notificationItemContainer}>
        <div className={styles.content}>
        <AccountCircle className={styles.notificationItemIcon}/>
        <div className={styles.notificationItemContent}>
            <p style={{marginTop: 0, marginBottom: 0, marginLeft: 15}}>
              {content}
            </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default NotificationItem;