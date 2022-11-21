import React from "react";

import data from "../../data/header_list.json"
import NavListPoint from "./NavListPoint";

export default function NavContent() {
    return (
        <ul className="header_list">
            {
                data.map((item, i) => (
                    <li key={i}>
                        <NavListPoint point={item} />
                    </li>
                ))
            }
        </ul>
    );
}