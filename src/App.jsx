import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Catalogue from "./Catalogue/Catalogue";
import { getPageQuantity } from "./Catalogue/Catalogue";
import Pages from "./Pages/Pages";

function App() {
  const [page, setPage] = useState(0);
  function handleClick(pg) {
    setPage(pg);
  }
  return (
    <>
      <Header />
      <Catalogue page={page} />
      <Pages click={handleClick} totalPages={getPageQuantity()} />
    </>
  );
}

export default App;
