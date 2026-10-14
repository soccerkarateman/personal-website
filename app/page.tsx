'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const previous = [
  'robotics research @ stanford',
  'research @ nasa',
  'stanford simr scholar',
];
const awards = [
  'winner, nasa genelab competition',
  'best research poster, ieee mit urtc',
  'diamond challenge semifinalist',
  'aime qualifier',
  "first robotics dean’s list semifinalist",
  'presenter @ international asgsr conference',
];
const scholarships = [
  'stamps scholarship semifinalist',
  'regents’ & chancellor’s scholarship finalist',
  'national merit scholarship finalist',
];

function Section({ number, title, items }: { number: string; title: string; items: string[] }) {
  return <section className="info-section"><div className="section-top"><span className="section-number">{number}</span><h2>{title}</h2></div><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || sessionStorage.getItem('portfolio-seen')) { setIntro(false); setEntered(true); return; }
    const a = window.setTimeout(() => setEntered(true), 520);
    const b = window.setTimeout(() => { setIntro(false); sessionStorage.setItem('portfolio-seen', 'yes'); }, 1600);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);

  return <div className={`site ${entered ? 'entered' : ''}`}>
    {intro && <div className={`opening ${entered ? 'opening-out' : ''}`} aria-hidden="true"><div className="opening-name">yash bhuva<span className="opening-cursor">_</span></div><div className="opening-line"/></div>}
    <div className="page">
      <header className="topbar entrance"><a className="name" href="#top">yash bhuva<span className="accent">.</span></a><div className="nav"><a href="mailto:yashbhuvaxyz@gmail.com">contact <ArrowUpRight size={12}/></a><a href="https://www.linkedin.com/in/yash-bhuva-80ab43256/" target="_blank" rel="noopener noreferrer">linkedin <ArrowUpRight size={12}/></a></div></header>
      <main id="top">
        <section className="intro entrance"><div className="intro-meta"><span>berkeley, california</span><span>personal site / 2026</span></div><h1>hey, i'm yash<span className="accent">.</span></h1><p className="intro-line">i'm an electrical engineering and computer sciences student at uc berkeley, interested in both software and hardware. i like the flexibility of software — being able to build, test, and iterate on ideas quickly — and the challenge of hardware, where those ideas have to work in the physical world. i'm especially interested in what happens when the two come together.</p><div className="intro-rule"><span>a little about me</span><span>↓</span></div></section>
        <div className="content entrance" id="about">
          <div className="primary-column">
            <Section number="01" title="currently" items={['co-founder @ stealth', 'eecs @ uc berkeley']}/>
            <Section number="02" title="previously" items={previous}/>
            <section className="info-section interests-section"><div className="section-top"><span className="section-number">03</span><h2>interests</h2></div><div className="interest-group"><h3>technical</h3><p>robotics · machine learning · embedded systems · computer architecture · physical ai</p></div><div className="interest-group"><h3>nontechnical</h3><p>soccer · martial arts · magic</p></div></section>
          </div>
          <div className="secondary-column" id="recognition">
            <Section number="04" title="awards" items={awards}/>
            <Section number="05" title="scholarships" items={scholarships}/>
          </div>
        </div>
      </main>
      <footer className="footer entrance"><span>© {new Date().getFullYear()} yash bhuva</span><div><a href="mailto:yashbhuvaxyz@gmail.com">email <ArrowUpRight size={12}/></a></div></footer>
    </div>
  </div>;
}
