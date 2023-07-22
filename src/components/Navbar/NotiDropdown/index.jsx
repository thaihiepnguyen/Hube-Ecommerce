import styles from './style.module.scss'
import NotificationItem from "../../NotificationItem";

const NotificationDropdown = (props) => {
  const notifications = props.noti;

  return (
    <>
      <div className={styles.NotiContainer}>
        <div className={styles.titleContainer}>
          <p style={{fontWeight: 'bolder'}}>Thông báo</p>
        </div>
        <div className={styles.contentContainer}>
          {notifications.map((content, index) => {
            return <div key={index}>
              <NotificationItem content={content}/>
            </div>
          })}
        </div>
      </div>
    </>
  );
}

export default NotificationDropdown;