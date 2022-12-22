import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Pagination = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   setSearchParams({ page: `${props.currentPage}` });
  // }, [props.currentPage]);

  // useEffect(() => {
  //   props.setCurrentPage(+searchParams.get("page"));
  //   console.log("run");
  // }, [searchParams]);

  let pages = [];

  for (let i = 1; i < Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((el, index) => (
        <button
          className={`pagination-button ${props.currentPage == el ? "active-button" : ""}`}
          key={index}
          onClick={() => props.setCurrentPage((prev) => (prev = el))}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
