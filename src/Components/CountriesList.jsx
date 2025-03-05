import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((country) => country.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return acc;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
