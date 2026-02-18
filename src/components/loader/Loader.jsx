import styles from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <ThreeDots
        height="60"
        width="60"
        radius="9"
        color="#be1f41"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
}