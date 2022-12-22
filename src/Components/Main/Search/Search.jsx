import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 500);
  let [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    searchParams.delete("search");
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
      if (debounce) {
        setSearchParams({ search: `${debounce}` });
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
    const arr = props.data?.filter((el) => {
      return el.name.toLowerCase().includes(debounce);
    });
    props.setCountries(arr);
    props.setCurrentPage((prev) => (prev = 1));
  }, [debounce]);


  return (
    <>
      <form id="search-form">
        <button className="search-button" aria-label="search button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="search"
          id="search-input"
          autoComplete="off"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
