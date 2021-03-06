import styles from "../styles/dashboard.module.scss";

// USING A TEACHER'S DASHBOARD AT FIRST

const Dashboard = () => (
  <div className={styles.container}>
    <div className={styles.navigation}>
      <ul>
        <li>Learning Center</li>
        <li>Engagement Scheduler</li>
        <li>Classroom & Student Reports</li>
        <li>Parent Reports</li>
      </ul>
    </div>
  </div>
);

export default Dashboard;
