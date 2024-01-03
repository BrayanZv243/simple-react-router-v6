import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch(url);
            if (!res.ok) throw Error("Error al consumir la API");

            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
};
