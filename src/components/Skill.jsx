import React from "react";
import { skillText, aiHead } from "../constants/Index";

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          AI workflow <em>AI를 제대로 쓰는 퍼블리셔</em>
        </h2>
        <div className="skill__desc">
          <p className="skill__sub">
            — 기획부터 배포까지 혼자 끝냅니다. {aiHead.sub}
          </p>
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
          <div className="skill__proof">
            {aiHead.proof.map((pf, key) => (
              <span key={key}>{pf}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
