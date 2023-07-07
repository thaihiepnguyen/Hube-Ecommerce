import React from 'react';
import Input from '../../components/Input';
import styles from './style.module.scss';
import Button from '../../components/Button';
import loginImage from '../../assets/hube_login.png';

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.loginTitle}>Login Your Account</h2>
        <div className={styles.inputContainer}>
          <Input
            inputClassName={styles.input}
            required
            label='Email'
            placeholder={'Enter your email'}
          />
          <Input
            inputClassName={styles.input}
            required
            label='Password'
            type='password'
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
      </div>
      <div>
        <img className={styles.loginImage} src={loginImage} alt='login' />
      </div>
    </div>
  );
};

export default LoginPage;
