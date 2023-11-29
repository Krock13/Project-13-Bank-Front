import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setLogout } from '../../redux/slices/authSlice.js';
import styles from './header.module.css';
import argentBankLogo from '../../assets/argentBankLogo.png';

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userFirstName = useSelector((state) => state.user.userProfile.firstName);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate('/');
  };

  return (
    <nav className={styles.mainNav}>
      <Link to='/' className={styles.mainNavLogo}>
        <img className={styles.mainNavLogoImage} src={argentBankLogo} alt='Argent Bank Logo' />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link to='/user' className={styles.mainNavItem}>
              <i className='fa fa-user-circle'></i>
              <span>{userFirstName}</span>
            </Link>
            <div className={styles.mainNavItem} onClick={handleLogout}>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </div>
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
