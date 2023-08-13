import React, { useState } from 'react';
import Input from '../../components/Input';
import styles from './style.module.scss';
import Button from '../../components/Button';
import loginImage from '../../assets/hube_login.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../App';

const SignUpPage = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const url = `${BASE_URL}/sign-up`;
      await axios.post(url, data);
      navigate('/login');
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.message);
      }
    }
  }
  return (
    <div className={styles.loginContainer}>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
        method='PORT'
      >
        <h2 className={styles.loginTitle}>Tạo tài khoản</h2>
        <div className={styles.inputContainer}>
          <Input
            inputClassName={styles.input}
            required
            label='Tên đầy đủ'
            name='fullname'
            onChange={handleChange}
            value={data.fullname}
            placeholder={'Nhập tên đầy đủ của bạn'}
          />
          <Input
            inputClassName={styles.input}
            required
            label='Email'
            type='email'
            name='email'
            onChange={handleChange}
            value={data.email}
            placeholder={'Nhập email của bạn'}
          />
          <Input
            inputClassName={styles.input}
            required
            label='Mật khẩu'
            type='password'
            name='password'
            onChange={handleChange}
            value={data.password}
            placeholder={'Nhập mật khẩu của bạn'}
          />
        </div>
        <div>
          <Button buttonClassName={styles.loginButton}>Đăng ký</Button>
          <div className={styles.divider}>
            <span className={styles.dividerText}>Hoặc</span>
          </div>

          <div className={styles.groupButton}>
            <Button buttonClassName={styles.button}>
              <img
                src='https://img.icons8.com/color/24/000000/google-logo.png'
                alt='google'
              />
              Google
            </Button>
            <Button buttonClassName={styles.button}>
              <img
                src='https://img.icons8.com/ios-filled/24/000000/github.png'
                alt='github'
              />
              Github
            </Button>
            <Button buttonClassName={styles.button}>
              <img
                src='https://img.icons8.com/color/24/000000/facebook-new.png'
                alt='facebook'
              />
              Facebook
            </Button>
          </div>
        </div>
        <div>
          <p className={styles.loginText}>
            Bạn đã có tài khoản?
            <a className={styles.loginLink} href='/login'>
              Đăng nhập ngay
            </a>
          </p>
        </div>
      </form>
      <div>
        <img className={styles.loginImage} src={loginImage} alt='login' />
      </div>
    </div>
  );
};

export default SignUpPage;
