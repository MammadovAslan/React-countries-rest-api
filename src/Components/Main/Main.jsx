import Pagination from "../Utils/Pagination";
import Countries from "./Countries/Countries";
import Search from "./Search/Search";
import Select from "./Select/Select";

const Main = (props) => {
  return (
    <main className="container">
      <div className="forms">
        <Search
          countries={props.countries}
          setCountries={props.setCountries}
          spinner={props.spinner}
          setCurrentPage={props.setCurrentPage}
          data={props.data}
        />
        <Select
          countries={props.countries}
          setCountries={props.setCountries}
          spinner={props.spinner}
          setCurrentPage={props.setCurrentPage}
          data={props.data}
        />
      </div>
      <Countries countries={props.countries} loading={props.loading} spinner={props.spinner} />
      <Pagination
        totalPosts={props.totalPosts}
        postsPerPage={props.postsPerPage}
        setCurrentPage={props.setCurrentPage}
        currentPage={props.currentPage}
      />
    </main>
  );
};

export default Main;
