import styles from "./Catalogue.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

const itemAmount = 100;
const itemsPerPage = 20;

export function getPageQuantity() {
  return Math.ceil(itemAmount / itemsPerPage);
}

function getItems(page) {
  const items = [];

  for (let i = 0; i < itemAmount; i++) {
    items.push(
      <Card
        imgsrc={`/src/assets/${Math.floor(Math.random() * 4) + 1}.jpg`}
        key={i}
        name={i + 1}
        tcode={i}
      />
    );
  }
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
}

export default function Catalogue({ page }) {
  const [items, setItems] = useState(getItems(page));
  const [transit, setTransit] = useState(false);
  useEffect(() => {
    setTransit(true);
    const timeoutId = setTimeout(() => {
      setItems(getItems(page));
      setTransit(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [page]);
  return (
    <div
      className={`${styles.wrap} ${
        transit ? styles["fade-enter"] : styles["fade-exit"]
      }`}
    >
      {items}
    </div>
  );
}
