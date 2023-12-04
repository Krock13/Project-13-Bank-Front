/**
 * Header component for the application.
 * Displays navigation links and handles user authentication status.
 */

// React and Redux hooks for state management and navigation
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Redux actions for handling user authentication and profile
import { setLogout } from '../../redux/slices/authSlice.js';
import { resetUserProfile } from '../../redux/slices/userSlice.js';

// Styles and assets
import styles from './header.module.css';
import argentBankLogo from '../../assets/argentBankLogo.png';

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userFirstName = useSelector((state) => state.user?.userProfile?.firstName);

  // Handle user logout
  const handleLogout = () => {
    dispatch(setLogout());
    dispatch(resetUserProfile());
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
            <Link to='/profile' className={styles.mainNavItem}>
              <i className='fa fa-user-circle'></i>
              <span>{userFirstName}</span>
            </Link>
            <div className={styles.mainNavItem} onClick={handleLogout}>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </div>
          </>
        ) : (
          <Link to='/login' className={styles.mainNavItem}>
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
