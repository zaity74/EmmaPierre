import React from "react";
import '../Pagination/pagination.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { createBrowserHistory } from 'history';




function Pagination(props) {
  const { total_pages, navigate } = props;
  const history = createBrowserHistory()
  

  const paginate = [...Array(total_pages).keys()].map((x) => {
    const page = x + 1;
    return (
      <li 
      key={page}
      onClick={() => window.location.href = `/boutique?page=${page}`}
      >
          {page}
      </li>
    );
  });

  // ...

  return (
    <>
      <div class="pagination">
        <p class="pagination-title">Page</p>
        <ul class="pagination-container">{paginate}</ul>
      </div>
    </>
  );
}

export default Pagination;
