import React from "react";

import Article from "./Article";
import data from "../data/search_engines.json"

export default function Section() {
    return (
        <section>
            <h1>Popular web browsers</h1>
                {
                    data.map((item) => (
                        <Article name={item.name} description={item.description} img={item.img} img_alt={item.img_alt} />
                    ))
                }
        </section>
    );
}