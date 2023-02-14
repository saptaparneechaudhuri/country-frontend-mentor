import "./filter.css";
import data from "../../../data.json";
import { useEffect, useState } from "react";

const Filter = ({ handleRegion }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [displayDroppdown, setDisplayDropdown] = useState(false);

  // const handleChange = () => {
  //   setFilter("america");
  // };

  const handleDropdown = () => {
    setDisplayDropdown(!displayDroppdown);
  };

  useEffect(() => {
    handleRegion(filter);
  }, [filter]);
  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down"></i>
      </div>

      {displayDroppdown ? (
        <div className="dropdown ">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  handleDropdown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
