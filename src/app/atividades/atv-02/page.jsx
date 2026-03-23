'use client'
import styles from "./page.module.css";
import { useState } from "react";

export default function Atividade2() {  

    const [num, setNum] = useState(100);

    function handleIncrementa() {
        setNum(num + 1);
    }

    function handleDecrementa() {
        setNum(num - 1);
    }

  return (
  <div className={styles.container}>
<h1 className={styles.tituloPrincipal}>ATIVIDADE 2</h1>
  <h2 className={styles.titulo}>Contador: {num}</h2>

  <div className={styles.botoes}>
    <button className={styles.button} onClick={handleDecrementa}>
      -1
    </button>

    <button className={styles.button} onClick={handleIncrementa}>
      +1
    </button>
  </div>
</div>
);
}