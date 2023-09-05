import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import styles from './style.module.scss'
import Content from "./Content";
import Footer from "../../components/Footer";

const HomePage = () => {
  const { homeContainer, contentContainer, bodyContainer, sidebarStyling, contentStyling } = styles
  return (
    <div className={homeContainer}>
      <Navbar />
      <div className={bodyContainer}>
      <div className={contentContainer}>
        <Sidebar className = {sidebarStyling} />
        <Content className = {contentStyling} />
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default HomePage;