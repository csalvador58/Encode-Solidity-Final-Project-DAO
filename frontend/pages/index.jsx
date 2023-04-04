import styles from "../styles/Home.module.css";
import LoginComponent from "../components/LoginComponent";
import MainPage from "../components/MainPage";
import MyProject from "../components/MyProject";
import Cohort from "../components/Cohort";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <LoginComponent />
        <MainPage />
        <MyProject />
        <Cohort />
      </main>
    </div>
  );
}
