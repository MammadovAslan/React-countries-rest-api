import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Route, Routes, useSearchParams } from "react-router-dom";
import DetailedInfo from "./Components/DetailedInfo/DetailedInfo";
import useFetch from "./Components/Hooks/useFetch";

function App() {
  //*--------------Dark/Light mode-----------------------
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));
  const [data, setData] = useState([]);
  //*--------------Get data from API-----------------------
  const [countries, setCountries] = useState([]);
  const { loading, erorr, makeRequest } = useFetch("https://restcountries.com/v2/all");
  //*--------------Pagination-----------------------
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const lastPostIndex = currentPage * postsPerPage;
  const firsPosttIndex = lastPostIndex - postsPerPage;

  const currentPosts = countries.slice(firsPosttIndex, lastPostIndex);
  
  //loading spinner
  const spinner = (
    <div className="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  useEffect(() => {
    makeRequest((data) => {
      setCountries(data);
      setData(data);
    });
  }, []);

  console.log(countries);

  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <div className="wrapper">
      <Header mode={mode} setMode={setMode} />
      <Routes>
        <Route
          path="/React-countries-rest-api"
          element={
            <Main
              countries={currentPosts}
              setCountries={setCountries}
              loading={loading}
              spinner={spinner}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPosts={countries.length}
              postsPerPage={postsPerPage}
              data={data}
            />
          }
        />
        <Route path="/:name" element={<DetailedInfo countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
