import React, {useState} from 'react';
import Input from '../../components/Input';
import styles from './style.module.scss';
import Button from '../../components/Button';
import loginImage from '../../assets/hube_login.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API_URL
const SignUpPage = () => {
  const [data, setData] = useState({
    fullname: "",
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
      const url = `${BASE_URL}sign-up`;
      // const {data: res} = await axios.post(url, data);
      await axios.post(url, data);
      navigate('/login')
    }catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.message)
      }
    }
  }
  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit} method="PORT">
        <h2 className={styles.loginTitle}>Create Your Account</h2>
        <div className={styles.inputContainer}>
          <Input
            inputClassName={styles.input}
            required
            label='Full name'
            name='fullname'
            onChange={handleChange}
            value={data.fullname}
            placeholder={'Enter your full name'}
          />
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
          <Input
            inputClassName={styles.input}
            required
            label='Confirm password'
            type='password'
            placeholder={'Enter your confirm password'}
          />
        </div>
        <div>
          <Button buttonClassName={styles.loginButton}>Confirm</Button>
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
          <p className={styles.loginText}>
            Already have an account?{' '}
            <a className={styles.loginLink} href='/login'>
              Log In
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
