import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map()}
      </ul>
    </div>
  );
}

export default CityList;
