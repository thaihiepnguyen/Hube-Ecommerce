import './styles.scss'
import {KeyboardArrowRight} from "@material-ui/icons";
const CategoryItem = (props) => {
    return (
        <div className="categoryContainer">
            <div className="wrapper">
                <div className="categoryIcon">{props.children}</div>
                <p className="categoryName">{props.categoryName}</p>
            </div>
            <KeyboardArrowRight/>
        </div>
    )
}

export default CategoryItem;