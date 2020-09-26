import Link from "next/link";

import styles from "../styles/index.module.scss";

const Index = () => {
  return (
    <div className={styles.defaultContainer}>
      <header className={styles.headerContainer}>
        <h2 className={styles.title}>PowerEngage</h2>
        <div className={styles.loginContainer}>
          <Link href="/login">
            <div className={styles.loginButton}>Get Access</div>
          </Link>
          <Link href="/login">
            <div className={styles.loginButton}>Admin</div>
          </Link>
        </div>
      </header>

      <section className={styles.cardsContainer}>
        <div className={styles.cardComponent}>
          <h4 className={styles.cardTitle}>Teacher Portal</h4>
          <div className={styles.teacherCard}></div>
        </div>
        <div className={styles.cardComponent}>
          <h4 className={styles.cardTitle}>Parent Portal</h4>
          <div className={styles.parentCard}></div>
        </div>
        <div className={styles.cardComponent}>
          <h4 className={styles.cardTitle}>Students</h4>
          <div className={styles.studentCard}></div>
        </div>
        <div className={styles.cardComponent}>
          <h4 className={styles.cardTitle}>Leadership Program</h4>
          <div className={styles.leadershipCard}></div>
        </div>
      </section>

      <section className={styles.logoLinksStatementContainer}>
        <div className={styles.anniversaryLogoContainer}>
          <div className={styles.anniversaryLogo}>
            Anniversary logo would go here!
          </div>
          <div className={styles.linksContainer}>
            <Link href="/about">
              <div className={styles.link}>About</div>
            </Link>
            <Link href="/contact">
              <div className={styles.link}>Contact Us</div>
            </Link>
          </div>
        </div>
        <div className={styles.missionStatementContainer}>
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

      <footer className={styles.footerContainer}>
        <div>
          <span>Founded by Carlos "Coach" Johnson</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
