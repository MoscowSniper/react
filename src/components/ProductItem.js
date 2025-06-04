import React, { useState } from "react";

const data = [
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 4 }
];

const ProductItem = () => {
    const [products, setProducts] = useState(data);
    const addProduct = () => {
        const input = prompt("Введите название и цену товара (пример: Велосипед 10000)");
        if (!input) return;

        const parts = input.split(" ");
        const price = parseInt(parts.pop(), 10);
        const name = parts.join(" ");

        if (!name || isNaN(price) || price <= 0) {
            alert("Некорректный ввод!");
            return;
        }

        const newProduct = { id: Date.now(), name, price, count: 1 };
        setProducts([...products, newProduct]);
    };
    const updateCount = (id, delta) => {
        setProducts(products
            .map(product =>
                product.id === id ? { ...product, count: product.count + delta } : product
            )
            .filter(product => product.count > 0) // Удаляем товар, если count стал 0
        );
    };
    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button onClick={addProduct} style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}>
                Добавить товар
            </button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                {products.map(product => (
                    <div
                        key={product.id}
                        onDoubleClick={() => removeProduct(product.id)}
                        style={{
                            border: "1px solid black",
                            padding: "20px",
                            width: "250px",
                            textAlign: "center",
                            borderRadius: "10px",
                            fontSize: "18px",
                        }}
                    >
                        <div style={{ fontWeight: "bold", fontSize: "22px" }}>{product.name}</div>
                        <div style={{ margin: "10px 0" }}>Price: {product.price}</div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                            <button
                                onClick={() => updateCount(product.id, -1)}
                                style={{ fontSize: "20px" }}
                                disabled={product.count <= 0}
                            >
                                -
                            </button>
                            <span style={{ fontSize: "20px", fontWeight: "bold" }}>{product.count}</span>
                            <button
                                onClick={() => updateCount(product.id, 1)}
                                style={{ fontSize: "20px" }}
                                disabled={product.count >= 25}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductItem;
