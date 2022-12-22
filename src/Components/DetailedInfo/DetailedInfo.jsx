import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const DetailedInfo = ({ countries }) => {
  const [country, setCountry] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const name = params?.name?.toLowerCase();

  useEffect(() => {
    setCountry(countries.filter((el) => el?.name?.toLowerCase() === name)[0]);
  }, [countries, params?.name]);

  const borderOnclickHandler = (e) => {
    if (e.target.tagName !== "P") {
      const code = e.target.textContent;
      const nextBorderCounty = countries
        ?.filter((el) => el.alpha3Code === code)[0]
        .name.toLowerCase();
      navigate(`/${nextBorderCounty}`);
    }
  };

  return (
    <div id="detailed-information">
      <div className="detailed-info-buttons">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <button className="close-button" onClick={() => navigate("/")}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="inform-container">
        <div className="flag">
          <img src={country?.flag} alt={country?.name} />
        </div>
        <div className="information">
          <h1 className="country-name">{country?.name}</h1>
          <div className="country-info">
            <p className="info native-name">
              <b>Native name</b>: {country?.nativeName}
            </p>
            <p className="info population">
              <b>Population</b>:{" "}
              {country?.population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
            <p className="info region">
              <b>Region</b>: {country?.region}
            </p>
            <p className="info sub-region">
              <b>Sub Region</b>: {country?.subregion}
            </p>
            <p className="info capital">
              <b>Capital</b>: {country?.capital}
            </p>
            <p className="info area">
              <b>Area</b>: {country?.area?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} m
              <sup>2</sup>
            </p>
            <p className="info top-level-domain">
              <b>Top Level Domain</b>: {country?.topLevelDomain}
            </p>
            <p className="info currencies">
              <b>Currencies</b>:{" "}
              {country?.currencies?.map((currencie) => {
                return currencie.name;
              })}
            </p>
            <p className="info languages">
              <b>Languages</b>:{" "}
              {country?.languages
                ?.map((lang) => {
                  return lang.name;
                })
                .join(",")}
            </p>
          </div>
          <div className="borders">
            {country?.borders && (
              <p
                className="border-countries"
                onClick={(e) => {
                  borderOnclickHandler(e);
                }}
              >
                <b>Border-Countries</b>:
                {country?.borders?.map((el, id) => (
                  <button className="border-countrie" key={id}>
                    {el}
                  </button>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
