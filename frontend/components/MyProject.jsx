import styles from "../styles/MyProject.module.css";
import Router, { useRouter } from "next/router";
export default function MyProject() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					<span>My Project</span>
				</h1>
				<p>
					To Do - List projects
				</p>
			</header>

		</div>
	);
}
