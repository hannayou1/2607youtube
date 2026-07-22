import React, { useEffect, useRef } from "react";
import { portText } from "../constants/Index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {

	const horizontalRef = useRef(null);
	const sectionRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const horizontal = horizontalRef.current;
		const wrap = horizontal.querySelector(".port__wrap");

		const getScrollAmount = () => wrap.scrollWidth - window.innerWidth;

		let scrollTween = gsap.to(wrap, {
			x: () => -getScrollAmount(),
			ease:"none",
			scrollTrigger:{
				trigger:horizontal,
				start:"top 56px",
				end: () => "+=" + getScrollAmount(),
				pin:true,
				scrub:1,
				invalidateOnRefresh:true,
				anticipatePin:1,
			}
		})

		return() => {
			scrollTween.kill();
		};
	},[])

  	return(
    	<section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <h2 className="port__title">
                    portfolio <em>대표 프로젝트</em>
                </h2>
                <div className="port__wrap">
					{portText.map((port, key) => (
						<article 
							className={`port__item p${key+1}`} 
							key={key}
							ref={(el) => (sectionRef.current[key] = el)}
						>
							<span className="num">{port.num}.</span>
							<a 
								href={port.code} 
								target="_blank" 
								className="img" 
								rel="nooponner noreferrer"
							>
								<img src={port.img} alt={port.name} />
							</a>
							<h3 className="title">{port.title}</h3>
							<p className="desc">{port.desc}</p>
							<a 
								href={port.view} 
								target="_blank" 
								className="site" 
								rel="nooponner noreferrer"
								>
									사이트 보기
							</a>
						</article>
					)) }
				   
                  
                </div>
            </div>
        </section>
  );
};

export default Port;
