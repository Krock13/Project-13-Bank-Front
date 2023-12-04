import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, resetError } from '../../redux/slices/authSlice.js';
import styles from './signIn.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate('/profile');
    }
  }, [authState.isAuthenticated, navigate]);

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.inputRemember}>
        <input type='checkbox' id='remember-me' />
        <label htmlFor='remember-me'>Remember me</label>
      </div>
      {authState.error && (
        <div className={styles.error}>{authState.error.message || 'Une erreur est survenue.'}</div>
      )}
      <button type='submit' className={styles.signInButton}>
        Sign In
      </button>
    </form>
  );
};

export function SignIn() {
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  );
}
