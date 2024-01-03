import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route element={<Inicio />} index />
                    <Route element={<Contacto />} path="/contacto" />
                    <Route element={<Blog />} path="/blog/" />
                    <Route element={<BlogDetails />} path="/blog/:id" />
                    <Route element={<NotFound />} path="*" />
                </Route>
            </Routes>
        </>
    );
};

export default App;
