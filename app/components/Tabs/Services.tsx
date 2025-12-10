"use client"
import NavTab from "./NavTab";

export default function Services() {
    return (
        <NavTab
            href="/services"
            letters={['s', 'e', 'r', 'v', 'i', 'c', 'e', 's']}
            position="left"
            verticalPos="top-1/4"
            baseDelay={4}
            altDelay={0}
        />
    );
}