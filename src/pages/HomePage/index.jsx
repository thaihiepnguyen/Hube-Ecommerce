import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import styles from './style.module.scss'
import Content from "./Content";
import Footer from "../../components/Footer";

const HomePage = () => {
  const { homeContainer, contentContainer } = styles
  return (
    <div className={homeContainer}>
      <Navbar />
      <div className={contentContainer}>
        <Sidebar/>
        <Content/>
      </div>
    </div>
  )
}

export default HomePage;