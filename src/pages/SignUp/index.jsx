import React from 'react';
import Input from '../../components/Input';
import styles from './style.module.scss';
import Button from '../../components/Button';
import loginImage from '../../assets/hube_login.png';

const SignUpPage = () => {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer}>
        <h2 className={styles.loginTitle}>Create Your Account</h2>
        <div className={styles.inputContainer}>
          <Input
            inputClassName={styles.input}
            required
            label='Full name'
            placeholder={'Enter your full name'}
          />
          <Input
            inputClassName={styles.input}
            required
            label='Email'
            type='email'
            placeholder={'Enter your email'}
          />
          <Input
            inputClassName={styles.input}
            required
            label='Password'
            type='password'
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
