"use client";
import React from "react";
import { RevealLinks } from "./RevealLinks";

export default function ServicesPage() {

    return (
        <div
            className="absolute top-0 left-0 w-full h-full flex overflow-x-auto"
            style={{zIndex: 0}}
        >
            <section className="w-full h-screen flex flex-col items-center justify-center p-6 sm:p-24" id="menu">
                <div className="scale-75 md:scale-75 lg:scale-100">
                    <RevealLinks/>
                </div>
            </section>
        </div>
    );
}

