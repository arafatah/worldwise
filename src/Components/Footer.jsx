function Footer({ styles }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise INC.
      </p>
    </footer>
  );
}

export default Footer;
