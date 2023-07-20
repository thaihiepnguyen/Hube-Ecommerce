import Navbar from "../../components/Navbar";
import styles from './style.module.scss'

const ProfilePage = () => {
  const { homeContainer, contentContainer } = styles
  return (
    <div className={homeContainer}>
      <Navbar />
      <div className={contentContainer}>
        <h1>User Profile</h1>
        <div style={{height: 600, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
          #HB-91528: Design User Profile
          Bui Tan Sang vs Le Dang Khoa
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;