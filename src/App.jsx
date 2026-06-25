
 import Navbar from './components/Navbar.jsx';
 import Hero from './components/Hero.jsx';
 import About from './components/About.jsx';
 import Projects from './components/Projects.jsx';
 import Strengths from './components/Strengths.jsx';
import Strands from './components/Strands.jsx';
 import Contact from './components/Contact.jsx';
 import './App.css';
import usePortfolioAnimations from './hooks/usePortfolioAnimations.js';

 export default function App() {
  usePortfolioAnimations();
   return (
     <div className="app">
       <Navbar />
       <main>
         <Hero />
         <About />
         <Projects />
        <div className="strands-section">
          <Strands
            colors={["#00d4b0", "#06B6D4", "#7C3AED"]}
            count={2}
            speed={0.3}
            amplitude={1.5}
            waviness={3.5}
            thickness={0.4}
            glow={0.8}
            taper={2.7}
            spread={1.5}
            intensity={0.8}
            saturation={1.8}
            opacity={0.9}
            scale={9}
          />
        </div>
         <Strengths />
         <Contact />
       </main>
     </div>
   );
 }









