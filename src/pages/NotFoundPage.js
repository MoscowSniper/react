import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/products">
                <button>Go to Products</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;