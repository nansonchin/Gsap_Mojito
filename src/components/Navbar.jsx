import React from 'react'
import {navLinks} from '../../constants/index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top',
                markers:true,
            }
        })

        navTween.fromTo('nav',
            {
            backgroundColor:'transparent'
            },
            {
                backgroundColor:'0000050',
                backgroundFilter:'blur(10px)',
                duration:1,
                ease:'power1.inOut,'
            }
        )

    
    })
    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Verlvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link)=>(
                        <li>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar