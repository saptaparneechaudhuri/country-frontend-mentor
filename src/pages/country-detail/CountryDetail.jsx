import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./country-detail.css";

import data from "../../data.json";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { searchByName } from "../../features/countries/countriesAction";
import { reset } from "../../features/countries/countriesSlice";

const CountryDetail = () => {
  const { loading, success, error, message, countries, country } = useSelector(
    (state) => state.countriesReducer
  );
  const [detail, setDetail] = useState();

  const dispatch = useDispatch();
  const { code } = useParams();

  // const detail = countries.find((item) => item.name.common === name);
  // console.log(detail);

  useEffect(() => {
    if (code) {
      console.log("i have code");
      dispatch(searchByName(code.toLowerCase()));
    }

    return () => {
      dispatch(reset());
    };
  }, [code, dispatch]);

  return (
    <section className="country-detail-container">
      <Link className="back-button" to="/">
        <i className="fa-solid fa-arrow-left"></i> Back
      </Link>
      {country.length > 0 ? (
        <div className="country-detail-content">
          <>
            <img
              src={country[0].flags.png}
              alt={country[0].flags.alt}
              className="country-detail-image"
            />

            <div className="country-detail-right">
              <h1>{country[0].name.common}</h1>
              <div className="details">
                <div className="detail-left">
                  <p>
                    Offcial Name: <span>{country[0].name.official}</span>
                  </p>
                  <p>
                    Population: <span>{country[0].population}</span>
                  </p>
                  <p>
                    Region: <span>{country[0].region}</span>
                  </p>

                  <p>
                    Sub Region: <span>{country[0].subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{country[0].capital}</span>
                  </p>
                </div>

                <div className="detail-right">
                  <p>
                    Top Level Domain: <span>{country[0].tld[0]}</span>
                  </p>
                  <p>
                    Currencies:
                    <span>
                      {Object.values(country[0].currencies)
                        .map((item) => {
                          return item.name;
                        })
                        .join(", ")}
                    </span>
                  </p>

                  <p>
                    Languages:
                    <span>
                      {Object.values(country[0].languages)
                        .map((item) => {
                          return item;
                        })
                        .join(", ")}
                    </span>
                  </p>
                </div>
              </div>

              <div className="border">
                <p>Border Countries:</p>
                {country[0].borders ? (
                  country[0].borders.map((item, index) => {
                    return (
                      <Link
                        className="border-name"
                        key={index}
                        to={`/${item}`}
                        // onClick={() =>
                        //   dispatch(searchByName(item.toLowerCase()))
                        // }
                      >
                        <p>{item}</p>
                      </Link>
                    );
                  })
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </>
        </div>
      ) : (
        <div>No country</div>
      )}
    </section>
  );
};

export default CountryDetail;
