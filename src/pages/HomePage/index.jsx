import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import './styles.scss'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className="homeContainer">
                <Sidebar/>
                <Slider/>
            </div>
        </div>
    )
}

export default HomePage;