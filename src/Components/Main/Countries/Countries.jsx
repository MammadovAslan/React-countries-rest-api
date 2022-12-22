import Countrie from "./Countrie/Countrie";

import { NavLink } from "react-router-dom";
const Countries = (props) => {
  return (
    <>
      {props.loading ? (
        props.spinner
      ) : (
        <div id="countries-container">
          {props?.countries?.map((el, id) => (
            <NavLink to={`/${el.name.toLowerCase()}`} key={id}>
              <Countrie
                flag={el.flag}
                name={el.name}
                population={el.population}
                region={el.region}
                capital={el.capital}
              />
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
