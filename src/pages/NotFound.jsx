import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
            <h1>Página no encontrada :( - 404</h1>
            <Link to="/" className="btn btn-dark">
                Volver al inicio
            </Link>
        </>
    );
};

export default NotFound;
