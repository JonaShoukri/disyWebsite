'use client'
import Services from './Services'
import About from './About'
import French from './French'
import Partners from "./Parteners";

export default function Nav() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Services />
            <About />
            <French />
            <Partners />
        </div>
    );
}
