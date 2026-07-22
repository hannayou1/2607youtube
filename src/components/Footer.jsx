import React from "react";
import { footerText } from "../constants/Index";


const Footer = () => {
  return (

    <footer id="footer" role="contentinfo">
        <div className="footer__inner">
            <h2 className="footer__text">
                <div>Hanna You</div>
                <div>@vibe coder</div>
            </h2>
            <div className="footer__info">
                <div className="left">
                    <div className="title">
                        <a href="mailto:pooh9868@naver.com" rel="noopenner noreferrer">contact</a>
                    </div>
                    <p className="desc">AI 활용 개발 기반 웹·앱 제작, 프로젝트 협업·채용 문의를 환영합니다.</p>
                </div>
                <div className="right">
                    <h3>works</h3>
                    <ul>
						{footerText.map((footer, key)=>(
							<li key={key}>
								<a href={footer.link} rel="noopenner noreferrer">{footer.title}</a>
								<em>{footer.desc}</em>
							</li>
						))}
                        
                      
                    </ul>
                </div>
            </div>
            <div className="footer__right">
                &copy; 2026 Hanna You<br />
                이 사이트는 리엑트를 이용하여 제작하였습니다.
            </div>
        </div>
    </footer>
  );
};

export default Footer;
