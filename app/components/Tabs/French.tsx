"use client"
import NavTab from "./NavTab";

export default function French() {
    return (
        <NavTab
            href={null}  // No link for language toggle
            letters={['f', 'r', 'a', 'n', 'ç', 'a', 'i', 's']}
            position="right"
            verticalPos="top-1/4"
            baseDelay={4.8}
            altDelay={0.8}
            reverseAnimation={true}
        />
    );
}