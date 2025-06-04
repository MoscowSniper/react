import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-details">
            <button onClick={() => navigate(-1)}>Назад</button>
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <h2>{product.title}</h2>
                <Rating rating={product.rating.rate} />
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>Description: {product.description}</p>
                <p>Reviews: {product.rating.count}</p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;