
 import { useState, useEffect } from 'react';
 import './Navbar.css';

 const NAV_ITEMS = [
   { label: '首页', href: '#hero' },
   { label: '关于', href: '#about' },
   { label: '项目', href: '#projects' },
   { label: '优势', href: '#strengths' },
 ];

 export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const [active, setActive] = useState('#hero');

   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 60);
       const sections = NAV_ITEMS.map(item => item.href.slice(1));
       for (let i = sections.length - 1; i >= 0; i--) {
         const el = document.getElementById(sections[i]);
         if (el && window.scrollY >= el.offsetTop - 200) {
           setActive('#' + sections[i]);
           break;
         }
       }
     };
     window.addEventListener('scroll', handleScroll, { passive: true });
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
       <div className="navbar-inner container">
         <a href="#hero" className="navbar-logo">
           <span className="logo-mark">✦</span>
           <span className="logo-text">Zeng Qinying</span>
         </a>
         <div className="navbar-links">
           {NAV_ITEMS.map(item => (
             <a
               key={item.href}
               href={item.href}
               className={`nav-link ${active === item.href ? 'active' : ''}`}
             >
               {item.label}
             </a>
           ))}
         </div>
         <a href="#contact" className="nav-cta">联系我</a>
       </div>
     </nav>
   );
 }
