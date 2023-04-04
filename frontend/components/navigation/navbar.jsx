import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div>
        <a className="btn btn-ghost normal-case text-xl">Diploma Guild</a>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Main</a>
          </li>
          <li>
            <a>My Project</a>
          </li>
          <li>
            <a>Cohort</a>
          </li>
        </ul>
      </div>
      <ConnectButton></ConnectButton>
    </div>
  );
}
