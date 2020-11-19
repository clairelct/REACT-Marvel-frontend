import React from "react";
import "./index.css";

// const Pagination = ({ total, limit }) => {
//   const pagesFunc = () => {
//     let pages = [];
//     let elem = 1;
//     for (let i = 1; i <= total; i += limit) {
//       pages.push(elem);
//       elem++;
//     }
//     return pages;
//   };

//   return (
//     <div className="pagination-container">
//       {pagesFunc().map((item, index) => {
//         return (
//           <div className="page" key={index}>
//             {item}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const Pagination = ({ limit, total, offset, setOffset }) => {
  return (
    <div className="pagination-container">
      <button
        style={offset > 0 ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setOffset(offset - limit);
          console.log(offset);
        }}
      >
        -
      </button>
      <button
        style={
          offset + limit < total ? { display: "block" } : { display: "none" }
        }
        onClick={() => {
          setOffset(offset + limit);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;
