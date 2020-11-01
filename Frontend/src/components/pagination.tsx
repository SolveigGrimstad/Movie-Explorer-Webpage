import React, { useState } from "react";

function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <ul className="pagination">
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons" onClick={() => setPage(page - 1)}>
              chevron_left
            </i>
          </a>
        </li>

        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons" onClick={() => setPage(page + 1)}>
              chevron_right
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
