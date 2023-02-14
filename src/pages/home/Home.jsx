import { useEffect, useState } from "react";
import Country from "../../components/country/Country";
import Filter from "../../components/input/filter/Filter";
import Search from "../../components/input/search/Search";
import "./home.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  showAllCountries,
  searchByName,
  searchByRegion,
} from "../../features/countries/countriesAction";
import {
  reset,
  searchCountryByName,
} from "../../features/countries/countriesSlice";

const Home = () => {
  const { loading, success, error, message, countries, country } = useSelector(
    (state) => state.countriesReducer
  );

  const [countrySearched, setCountrySearched] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (name) => {
    setCountrySearched(name);
  };

  const handleRegionFilter = (region) => {
    setRegionFilter(region);
    if (region !== "") {
      dispatch(searchByRegion(region));
    }
  };

  useEffect(() => {
    // when page loads show all countries
    dispatch(showAllCountries());

    if (error) {
      console.log(error);
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, error]);

  return (
    <section className="home-page-container">
      <div className="input-container">
        <Search handleSearch={handleSearch} />
        <Filter handleRegion={handleRegionFilter} />
      </div>
      <Country
        countries={countries}
        success={success}
        country={countrySearched}
        //
        loading={loading}
      />
    </section>
  );
};

export default Home;
