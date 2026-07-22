import React, { useEffect, useRef, useState } from "react";
import { skillBars, toolChips, careerTimeline } from "../constants/Index";

const Site = () => {
  const barsRef = useRef(null);
  const [fill, setFill] = useState(false);

  // 스킬 바가 화면에 들어오면 width 채우기
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setFill(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          skill & career <em>스킬 &amp; 경력</em>
        </h2>

        <div className="career__wrap">
          <div className="career__left">
            <div className="skillbars" ref={barsRef}>
              {skillBars.map((s, key) => (
                <div className="skillbar" key={key}>
                  <div className="label">
                    <span>{s.label}</span>
                    <span>{s.percent}%</span>
                  </div>
                  <div className="track">
                    <div
                      className="bar"
                      style={{ width: fill ? `${s.percent}%` : 0 }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="tools">
              <h3>사용 기술 · 툴</h3>
              <div className="chips">
                {toolChips.map((t, key) => (
                  <span className="chip" key={key}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="career__right">
            {careerTimeline.map((c, key) => (
              <div className="tl-item" key={key}>
                <div className="tl-col">
                  <span className="tl-dot"></span>
                  <span className="tl-line"></span>
                </div>
                <div className="tl-body">
                  <div className="tl-year">{c.year}</div>
                  <div className="tl-role">{c.role}</div>
                  <p className="tl-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Site;
