import styles from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
}



