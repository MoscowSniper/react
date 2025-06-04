import React from "react";
import CardList from "../CardList/CardList";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <main className={styles.main}>
            <CardList />
        </main>
    );
};

export default Main;
