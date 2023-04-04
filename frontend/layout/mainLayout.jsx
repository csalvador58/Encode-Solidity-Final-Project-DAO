import Navbar from "../components/navigation/navbar";
import classes from '../styles/mainLayout.module.css'

export default function MainLayout({ children }) {
  return (
    <div className={classes.minWidth}>
      <Navbar />
      {children}
      <footer className={classes.mainLayout}>
        <a
          href="https://diplomaDAO.xyz"
          rel="noopener noreferrer"
          target="_blank"
        >
          🚀 Built by the DiplomaDAO Team 🚀{" "}
        </a>
      </footer>
    </div>
  );
}
