"use client"
import NavTab from "./NavTab";

export default function Partners() {
    return (
        <NavTab
            href="/partners"
            letters={['p', 'a', 'r', 't', 'n', 'e', 'r', 's']}
            position="right"
            verticalPos="top-3/4"
            baseDelay={4}
            altDelay={0}
            reverseAnimation={true}
        />
    );
}