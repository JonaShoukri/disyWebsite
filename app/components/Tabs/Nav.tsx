'use client'
import {motion} from 'framer-motion';
import Services from './Services'
import About from './About'
import French from './French'
import Partners from "./Parteners";
export default function Nav() {
    return (
        <div>
            <Services/>
            <About/>
            <French/>
            <Partners/>
        </div>
    );
}