import styles from './signIn.module.css';

export function SignIn() {
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
        <h1>Sign In</h1>
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className={styles.inputRemember}>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          {/* Note: Adjust the below as needed for your routing and logic */}
          <a href='./user.html' className={styles.signInButton}>
            Sign In
          </a>
          {/* Uncomment the below button for actual form submission */}
          {/* <button type="submit" className="sign-in-button">Sign In</button> */}
        </form>
      </section>
    </main>
  );
}
