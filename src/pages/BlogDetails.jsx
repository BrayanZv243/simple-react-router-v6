import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
    const params = useParams();

    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error... {error}</p>;

    return (
        <>
            <h1>Detalles del blog</h1>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <Link to="/blog">Volver</Link>
        </>
    );
};

export default BlogDetails;
