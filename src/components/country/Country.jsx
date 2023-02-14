import "./country.css";
// import data from "../../data.json";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { searchByName } from "../../features/countries/countriesAction";

const Country = ({ countries, success, country, region, loading }) => {
  const [countryData, setCountryData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setCountryData(countries);
    // if (region) {
    //   console.log(region);
    //   setCountryData(countries.filter((item) => item.region === region));
    // }

    if (country) {
      setCountryData(
        countries.filter((item) =>
          item.name.common.toLowerCase().startsWith(country.toLowerCase())
        )
      );
    }
  }, [countries, region, country]);

  return (
    <section className="country-container">
      {loading && <h1>Loading ...</h1>}
      {!loading &&
        success &&
        countryData.map((item, index) => {
          return (
            <Link
              // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
              className="country-card"
              key={index}
              to={`/${item.cioc}`}
            >
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="country-image"
              />
              <div className="country-content">
                <h3> {item.name.common}</h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })}
    </section>
  );
};

export default Country;
