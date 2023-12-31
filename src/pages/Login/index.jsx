import React, { useState } from 'react';
import Input from '../../components/Input';
import styles from './style.module.scss';
import Button from '../../components/Button';
import loginImage from '../../assets/hube_login.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import { BASE_URL } from '../../App';

const LoginPage = () => {
  const cookies = new Cookies();
  const [data, setData] = useState({
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
      const url = `${BASE_URL}/login`;
      const { data: res } = await axios.post(url, data);
      cookies.set('token', res.token);
      navigate('/');
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
        <h2 className={styles.loginTitle}>Đăng nhập tài khoản</h2>
        <div className={styles.inputContainer}>
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
          <Button buttonClassName={styles.loginButton}>Đăng nhập</Button>
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
          <p className={styles.signUpText}>
            Bạn chưa có tài khoản?
            <a className={styles.signUpLink} href='/sign-up'>
              Đăng ký ngay
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

export default LoginPage;
