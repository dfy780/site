import styles from "./Cart.module.css";
import { useState, useEffect } from "react";

export default function Cart() {
  return (
    <div className={styles.cartContainer}>
      <h2>Корзина</h2>
    </div>
  );
}
