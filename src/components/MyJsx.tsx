import styles from "@/assets/styles/my-styles.module.scss";

export default function MyJsx() {
	return ( // styles.test works fine.
		<p class={styles.test}>The style of this element comes from <code>assets/styles/my-styles.module.scss</code>.</p>
	);
}
