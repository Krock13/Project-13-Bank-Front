/**
 * Footer component for the application.
 * Displays the copyright information for Argent Bank.
 */

// Styles for the Footer component
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Copyright 2020 Argent Bank</p>
    </footer>
  );
}
