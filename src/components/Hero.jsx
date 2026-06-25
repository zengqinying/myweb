import MagicRings from './MagicRings.jsx';
import './Hero.css';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <img className="hero-bg-image" src="/images/hero-bg.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="hero-dim-overlay" />
      <div className="hero-rings-bg">
        <MagicRings
          color="#50dbd6"
          colorTwo="#42fcff"
          ringCount={8}
          speed={0.7}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.25}
          radiusStep={0.095}
          scaleRate={0.08}
          opacity={1}
          blur={0}
          noiseAmount={0.06}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.25}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="hero-badge" data-animate="hero-badge">Visual & AI Designer</div>
        <h1 className="hero-title">
          <span data-animate="hero-title-cn">曾钦滢</span>
          <span className="hero-title-en" data-animate="hero-title-en">Zeng Qinying</span>
        </h1>
        <p className="hero-subtitle" data-animate="hero-subtitle">
          视觉设计师 / AI设计师 / 品牌设计师<br />
          用技术与美学的交汇，创造有温度的数字化体验
        </p>
        <div className="hero-actions" data-animate="hero-buttons">
          <a href="#projects" className="hero-btn-primary">查看作品</a>
          <a href="#contact" className="hero-btn-secondary">联系我</a>
        </div>
      </div>
      <div className="hero-scroll" data-animate="hero-scroll" onClick={scrollToAbout}>
        <span className="scroll-text">向下滚动</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}




