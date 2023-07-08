import styles from './style.module.scss'
import {KeyboardArrowRight} from "@material-ui/icons";
const CategoryItem = (props) => {
  const { children, categoryName } = props
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.wrapper}>
        <div className={styles.categoryIcon}>{children}</div>
        <p className={styles.categoryName}>{categoryName}</p>
      </div>
      <KeyboardArrowRight style={{color: "gray"}}/>
    </div>
  )
}

export default CategoryItem;