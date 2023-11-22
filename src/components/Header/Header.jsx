// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import argentBankLogo from '../../assets/argentBankLogo.png';

export function Header() {
  const isAuthenticated = true; // = useSelector((state) => state.auth.isAuthenticated);
  const userFirstName = 'Tony'; // = useSelector((state) => state.auth.user.firstName);
  return (
    <nav className={styles.mainNav}>
      <Link to='/' className={styles.mainNavLogo}>
        <img className={styles.mainNavLogoImage} src={argentBankLogo} alt='Argent Bank Logo' />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link to='/transactions' className={styles.mainNavItem}>
              <i className='fa fa-user-circle'></i>
              <span>{userFirstName}</span>
            </Link>
            <Link to='/' className={styles.mainNavItem}>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to='/signin' className={styles.mainNavItem}>
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
