import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
const Select = (props) => {
  const [select, setSelect] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
      if (select === "All") {
        props.setCountries(props.data);
      searchParams.delete("region");
      setSearchParams(searchParams);
    } else {
      const arr = props.data?.filter((el) => {
        return el?.region === select;
      });
      props.setCountries(arr);
      setSearchParams({ region: `${select}` });
    }
    props.setCurrentPage((prev) => (prev = 1));
  }, [select]);

  const onChangeHandler = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <form id="filter-form" onChange={onChangeHandler} value={select}>
        <select id="filter" aria-label="filter">
          <option value="All" id="option-all" className="region-option">
            All
          </option>
          <option value="Africa" id="option-africa" className="region-option">
            Africa
          </option>
          <option value="Americas" id="option-america" className="region-option">
            Americas
          </option>
          <option value="Asia" id="option-asia" className="region-option">
            Asia
          </option>
          <option value="Oceania" id="option-oceania" className="region-option">
            Oceania
          </option>
          <option value="Europe" id="option-europe" className="region-option">
            Europe
          </option>
        </select>
      </form>
    </>
  );
};

export default Select;
