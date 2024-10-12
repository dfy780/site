import styles from "./Pages.module.css";
import { useState, useEffect } from "react";

export default function Pages({ click, totalPages }) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [totalPages]);

  function handleClick(pg) {
    if (pg >= 0 && pg < totalPages) {
      setPage(pg);
      console.log(pg);
      click(pg);
    }
  }

  return (
    <div className={styles.pagination}>
      <button onClick={() => handleClick(page - 1)}>&laquo;</button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={i === page ? styles.active : ""}
          onClick={() => handleClick(i)}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => handleClick(page + 1)}>&raquo;</button>
    </div>
  );
}
