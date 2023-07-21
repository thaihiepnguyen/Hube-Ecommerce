import React, {useState} from 'react';
import Input from '../../components/Input';
import styles from './style.module.scss';
import Button from '../../components/Button';
import loginImage from '../../assets/hube_login.png';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import {BASE_URL} from "../../App";

const LoginPage = () => {
  const cookies = new Cookies();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const url = `${BASE_URL}/login`;
      const {data: res} = await axios.post(url, data);
      cookies.set("token", res.token)
      navigate('/')
    }catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.message)
      }
    }
  }
  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit} method="PORT">
        <h2 className={styles.loginTitle}>Login Your Account</h2>
        <div className={styles.inputContainer}>
          <Input
            inputClassName={styles.input}
            required
            label='Email'
            type='email'
            name='email'
            onChange={handleChange}
            value={data.email}
            placeholder={'Enter your email'}
          />
          <Input
            inputClassName={styles.input}
            required
            label='Password'
            type='password'
            name='password'
            onChange={handleChange}
            value={data.password}
            placeholder={'Enter your password'}
          />
        </div>
        <div>
          <Button buttonClassName={styles.loginButton}>Login</Button>
          <div className={styles.divider}>
            <span className={styles.dividerText}>Or</span>
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
            Don't have an account?{' '}
            <a className={styles.signUpLink} href='/sign-up'>
              Sign Up
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
