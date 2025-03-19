import Link from 'next/link';

import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        {"Oops! The page you're looking for doesn't exist."}
      </p>
      <Link href="/">Go Back to Home</Link>
    </div>
  );
}
