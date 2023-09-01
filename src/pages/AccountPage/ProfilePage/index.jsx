import styles from './style.module.scss'
import Button from "../../../components/Button";
import React from "react";
import {Mail, Phone} from "@material-ui/icons";
import {Password, Pin, SafetyCheck} from "@mui/icons-material";

const ProfilePage = () => {
  return <>
    <div className={styles.contentContainer}>
      <div className={styles.left}>
        <span>Thông tin cá nhân</span>
        <div className={styles.profile}>
          <div className={styles.avtCover}>
            <img
              className={styles.avt}
              src="/static/media/avatar0.76df38dc900575ebe928.png"
              alt="avt" />
          </div>
          <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{display: "flex", alignItems: "center", margin: 10}}>
              <label style={{flex: 1}}>Họ & tên</label>
              <input style={{minWidth: "250px", flex: 3, margin: 0}} value={'Nguyễn Thái Hiệp'}/>
            </div>
            <div style={{display: "flex", alignItems: "center", margin: 10}}>
              <label style={{flex: 1}}>Nick name</label>
              <input style={{minWidth: "250px", flex: 3, margin: 0}} value={'Hệp'}/>
            </div>
          </div>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <label htmlFor={"birthday"} style={{flex: 3, marginLeft: 20}}>Ngày sinh</label>
          <input style={{flex: 10}} type="date" id="birthday" name="birthday"/>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <label htmlFor="gender" style={{flex: 3, marginLeft: 20}}>Giới tính</label>
          <div style={{flex: 10, alignItems: "center", justifyContent: "left", display: "flex",}}>
            <div style={{marginRight: 30}}>
              <input type="radio" id="gender" name="Nam"/>
              <label style={{marginLeft: 10}} htmlFor="gender">Nam</label>
            </div>
            <div style={{marginRight: 30}}>
              <input type="radio" id="gender" name="Nữ"/>
              <label style={{marginLeft: 10}} htmlFor="gender">Nữ</label>
            </div>
            <div style={{marginRight: 30}}>
              <input type="radio" id="gender" name="Khác"/>
              <label style={{marginLeft: 10}} htmlFor="gender">Khác</label>
            </div>
          </div>
        </div>
        <div style={{marginLeft: 132, marginTop: 30}}>
          <Button>Lưu thay đổi</Button>
        </div>
      </div>
      <div className={styles.right}>
        <span>Số điện thoại & email</span>

        <div style={{margin: 15, display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%'}}>
          <Phone style={{flex: 1}}/>
          <div style={{flex: 11, marginLeft: 10}}>
            <span>0977328391</span>
          </div>
          <div style={{flex: 4}}>
            <button>Cập nhật</button>
          </div>
        </div>
        <div style={{margin: 15, display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%'}}>
          <Mail style={{flex: 1}}/>
          <div style={{flex: 11, marginLeft: 10, whiteSpace: "nowrap"}}>
            <span>thaihiep232002@gmail.com</span>
          </div>
          <div style={{flex: 4}}>
            <button>Cập nhật</button>
          </div>
        </div>
        <div style={{height: 50}}></div>
        <span>Bảo mật</span>

        <div style={{margin: 15, display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%'}}>
          <Password style={{flex: 1}}/>
          <div style={{flex: 11, marginLeft: 10}}>
            <span>Đổi mật khẩu</span>
          </div>
          <div style={{flex: 4}}>
            <button>Cập nhật</button>
          </div>
        </div>
        <div style={{margin: 15, display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%'}}>
          <SafetyCheck style={{flex: 1}}/>
          <div style={{flex: 11, marginLeft: 10, whiteSpace: "nowrap"}}>
            <span>Thiết lập mã pin</span>
          </div>
          <div style={{flex: 4}}>
            <button>Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ProfilePage;