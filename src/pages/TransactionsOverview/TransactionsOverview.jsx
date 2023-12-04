import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/slices/userSlice';
import styles from './transactionsOverview.module.css';

export function TransactionsOverview() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  // États locaux pour le formulaire d'édition
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (userProfile) {
      setFirstName(userProfile.firstName);
      setLastName(userProfile.lastName);
    }
  }, [userProfile]);

  // Basculer l'affichage du formulaire d'édition
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Mettre à jour le profil de l'utilisateur
  const handleSave = () => {
    dispatch(updateProfile({ firstName, lastName }));
    toggleEditMode();
  };

  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>
        {editMode ? (
          <h1>
            Welcome back
            <div className={styles.wrapEditName}>
              <div className={styles.nameInput}>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className={styles.nameButton}>
                <button onClick={handleSave} className={styles.editButton}>
                  Save
                </button>
                <button onClick={toggleEditMode} className={styles.editButton}>
                  Cancel
                </button>
              </div>
            </div>
          </h1>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : 'Utilisateur'}!
            </h1>
            <button onClick={toggleEditMode} className={styles.editButton}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Checking (x8349)</h3>
          <p className={styles.accountAmount}>$2,082.79</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
          <p className={styles.accountAmount}>$10,928.42</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles.accountAmount}>$184.30</p>
          <p className={styles.accountAmountDescription}>Current Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
    </main>
  );
}
