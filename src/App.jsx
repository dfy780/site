import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Catalogue from "./Catalogue/Catalogue";
import { getPageQuantity } from "./Catalogue/Catalogue";
import Pages from "./Pages/Pages";
import Cart from "./Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [page, setPage] = useState(0);
  function handleClick(pg) {
    setPage(pg);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Catalogue page={page} />
          <Pages click={handleClick} totalPages={getPageQuantity()} />
        </>
      ),
    },
    { path: "/cart", element: <Cart /> },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
