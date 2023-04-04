import styles from "../styles/MainPage.module.css";
import Router, { useRouter } from "next/router";
export default function MainPage() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <h1>
          <span>Main Page</span>
        </h1>
      </header>

      <div className={styles.buttons_container}>
        <a target={"_blank"} href={"#"}>
          <div className={styles.button}>
            <p>Request Tokens</p>
          </div>
        </a>
        <a target={"_blank"} href={"#"}>
          <div className={styles.button}>
            <p>My Project</p>
          </div>
        </a>
        <a target={"_blank"} href={"#"}>
          <div className={styles.button}>
            <p>Cohort Projects</p>
          </div>
        </a>
      </div>
    </div>
  );
}
