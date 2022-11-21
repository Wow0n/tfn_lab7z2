import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import Nav from "./components/Nav/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <header>
            <p>Navigation bar</p>
            <Nav/>
        </header>
        <Section/>
        <Footer/>
    </StrictMode>
);