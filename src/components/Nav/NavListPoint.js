import React from "react";

export default function NavListPoint({point}) {
    return (
        <a href={point.url}>{point.text}</a>
    );
}