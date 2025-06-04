import React from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";

const data = [
    { id: 1, title: "Карточка 1", text: "Описание 1" },
    { id: 2, title: "Карточка 2", text: "Описание 2" },
    { id: 3, title: "Карточка 3", text: "Описание 3" },
];

const CardList = () => {
    return (
        <div className={styles.cardList}>
            {data.map((item) => (
                <Card key={item.id} title={item.title} text={item.text} />
            ))}
        </div>
    );
};

export default CardList;
