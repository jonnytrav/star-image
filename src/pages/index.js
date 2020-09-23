import Link from "next/link";

import styles from "../styles/index.module.scss";

const Index = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div>Logo IMG here later</div>
        <div className={styles.loginContainer}>
          <Link href="/login">
            <div className={styles.loginButton}>Admin</div>
          </Link>
          <Link href="/login">
            <div className={styles.loginButton}>Get Access</div>
          </Link>
        </div>
      </header>

      <section className={styles.missionStatementContainer}>
        <div className={styles.anniversaryLogoContainer}>
          <div className={styles.anniversaryLogo}>
            Anniversary logo would go here!
          </div>
          <div className={styles.aboutContactLinks}>
            <Link href="/about">
              <div className={styles.about}>About</div>
            </Link>
            <Link href="/contact">
              <div className={styles.contact}>Contact Us</div>
            </Link>
          </div>
        </div>
        <div className={styles.missionStatement}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
            sodales ut etiam sit amet nisl purus. Donec pretium vulputate sapien
            nec sagittis aliquam malesuada bibendum. Eu facilisis sed odio morbi
            quis. Cum sociis natoque penatibus et magnis dis. Pretium lectus
            quam id leo in vitae turpis massa sed. Aliquet lectus proin nibh
            nisl condimentum id venenatis a. Sapien faucibus et molestie ac
            feugiat sed lectus. Ultricies mi eget mauris pharetra et. Purus
            viverra accumsan in nisl nisi scelerisque eu. Egestas diam in arcu
            cursus euismod quis viverra. Vestibulum rhoncus est pellentesque
            elit. Risus in hendrerit gravida rutrum quisque non.
          </p>
        </div>
      </section>

      <section className={styles.cardsContainer}>
        <div>Teacher Portal</div>
        <div>Parent Portal</div>
        <div>Students</div>
        <div>Leadership Program</div>
      </section>

      <footer className={styles.footerContainer}>
        <div>
          <span>Footer goes here!</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
