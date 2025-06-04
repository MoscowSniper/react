import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import StarRating from './StarRating';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Загрузка...</div>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <StarRating rating={Math.round(product.rating.rate)} />
            <button onClick={() => history.goBack()}>Назад</button>
        </div>
    );
};

export default ProductDetail;