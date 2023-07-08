import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import styles from './style.module.scss'
import Slider from "./Slider";

const HomePage = () => {
  const { homeContainer, contentContainer } = styles
  return (
    <div className={homeContainer}>
      <Navbar />
      <div className={contentContainer}>
        <Sidebar/>
        <Slider/>
      </div>
    </div>
  )
}

export default HomePage;