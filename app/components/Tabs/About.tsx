"use client"
import NavTab from "./NavTab";

export default function About() {
    return (
        <NavTab
            href="/about"
            letters={['a', 'b', 'o', 'u', 't']}
            position="left"
            verticalPos="top-3/4"
            baseDelay={4.8}
            altDelay={0.8}
        />
    );
}