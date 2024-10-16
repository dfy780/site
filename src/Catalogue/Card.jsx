import { useState } from "react";
import styles from "./Catalogue.module.css";
import { Link } from "react-router-dom";

function clickHandler(tcode) {}

export default function Card({ imgsrc, pkey, name, tcode }) {
  const [count, setCount] = useState(1);
  return (
    <div key={pkey} className={styles.card}>
      <img src={imgsrc} alt="Image" />
      <div className={styles.content}>
        <span>
          <b>{name}</b>
        </span>
        <p>{tcode}</p>
        <p>
          <b>Цена</b>
        </p>
        <div className={styles.cart}>
          <span>
            <button
              onClick={() => {
                if (count > 1) setCount(count - 1);
              }}
            >
              &laquo;
            </button>
            {count}
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              &raquo;
            </button>
          </span>
          <a
            href="/cart"
            onClick={() => {
              clickHandler(tcode);
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <path d="M19.884 21.897a.601.601 0 0 1-.439.186h-15a.6.6 0 0 1-.439-.186.601.601 0 0 1-.186-.439v-15a.6.6 0 0 1 .186-.439.601.601 0 0 1 .439-.186h3.75c0-1.028.368-1.911 1.104-2.646.735-.735 1.618-1.104 2.646-1.104s1.911.368 2.646 1.104c.735.736 1.104 1.618 1.104 2.646h3.75a.6.6 0 0 1 .439.186.601.601 0 0 1 .186.439v15a.604.604 0 0 1-.186.439zM18.819 7.083h-3.125v2.5a.598.598 0 0 1-.186.439c-.124.124-.271.186-.439.186s-.315-.062-.439-.186a.6.6 0 0 1-.186-.439v-2.5h-5v2.5a.598.598 0 0 1-.186.439c-.124.124-.271.186-.439.186s-.315-.062-.439-.186a.6.6 0 0 1-.186-.439v-2.5H5.069v13.75h13.75V7.083zm-8.642-3.018a2.409 2.409 0 0 0-.733 1.768h5c0-.69-.244-1.279-.732-1.768s-1.077-.732-1.768-.732-1.279.244-1.767.732z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
