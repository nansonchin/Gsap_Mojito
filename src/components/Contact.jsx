import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {SplitText} from 'gsap/all'
const Contact = () => {

    useGSAP(()=>{
        const titleSplit=SplitText.create('#contact h2',{type:'words'})
        const timeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            },
            ease:'power1.inOut'
        })

        timeline.from(titleSplit.words,{
            opacity:0,yPercent:100,stagger:0.02,
        }).from('#contact h3,#contact p',{
            opacity:0,yPercent:100,stagger:0.02,
        }).to('#f-right-leaf',{y:-50,duration:1,ease:'power1.inOut'})
        .to('#f-left-leaf',{y:-50,duration:1,ease:'power1.inOut'},'<')
        
        
    })
  return (
    <div id="contact">
        <img src="/images/footer-right-leaf.png" id="f-right-leaf"/>
        <img src="/images/footer-left-leaf.png" id="f-left-leaf"/>
        <div className='content'>
            <h2>Where to Find Us</h2>
            <div>
                <h3>Visit Our Bar</h3>
                <p>56,Raq VLB, #404, Los Angeles, CA 20219</p>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>(555) 892- 21903</p>
                <p>hello@aksjldh.com</p>
            </div>
            <div>
                <h3>Open Everyday</h3>
                {openingHours.map((item)=>(
                    <p key={item.day}>
                        {item.day}:{item.time}
                    </p>
                ))}
            </div>
            <div>
                <h3>Socials</h3>
                <div className='flex-center gap-5'>
                    {socials.map((social)=>(
                        <a key={social.name} href={social.url} target='_blank' rel="noopener noreferrer" arial-label={social.name}>
                            <img src={social.icon}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact