import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

export default function usePortfolioAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // ========== HERO OPENING SEQUENCE ==========
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    heroTl
      .from('[data-animate="hero-badge"]', {
        y: -50, opacity: 0, duration: 1.2, ease: 'expo.out',
      })
      .from('[data-animate="hero-title-cn"]', {
        clipPath: 'inset(0 100% 0 0)', duration: 1.6, ease: 'power3.inOut',
      }, '-=0.3')
      .from('[data-animate="hero-title-en"]', {
        y: 100, opacity: 0, scaleY: 0.85, duration: 1.2, ease: 'expo.out',
      }, '-=0.7')
      .from('[data-animate="hero-subtitle"]', {
        y: 50, opacity: 0, duration: 1.0,
      }, '-=0.5')
      .from('[data-animate="hero-buttons"] > *', {
        y: 40, opacity: 0, stagger: 0.18, duration: 0.9,
      }, '-=0.5')
      .from('[data-animate="hero-scroll"]', {
        opacity: 0, duration: 1.0,
      }, '-=0.3');

    // ========== SECTION LABELS ==========
    gsap.utils.toArray('[data-animate="section-label"]').forEach((el) => {
      gsap.set(el, { x: -120, opacity: 0 });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el, start: 'top 92%', toggleActions: 'play none none none',
        },
        x: 0, opacity: 1, duration: 1.3, ease: 'power3.out',
      });
    });

    // ========== SECTION TITLES ==========
    gsap.utils.toArray('[data-animate="section-title"]').forEach((el) => {
      gsap.set(el, { clipPath: 'inset(0 100% 0 0)' });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el, start: 'top 90%', toggleActions: 'play none none none',
        },
        clipPath: 'inset(0 0% 0 0)', duration: 1.5, ease: 'power4.out',
      });
    });

    // ========== TEXT BLOCKS ==========
    gsap.utils.toArray('[data-animate="text-up"]').forEach((el, i) => {
      gsap.set(el, { opacity: 0, y: 60 });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el, start: 'top 88%', toggleActions: 'play none none none',
        },
        y: 0, opacity: 1, duration: 1.1, delay: i * 0.15, ease: 'power3.out',
      });
    });

    // ========== STAGGER CARDS ==========
    gsap.utils.toArray('[data-animate="card-stagger"]').forEach((parent) => {
      const items = parent.children;
      gsap.set(items, { opacity: 0, y: 70 });
      gsap.to(items, {
        scrollTrigger: {
          trigger: parent, start: 'top 88%', toggleActions: 'play none none none',
        },
        y: 0, opacity: 1, stagger: 0.12, duration: 1.0, ease: 'power3.out',
      });
    });

    // ========== CONTENT BLOCKS ==========
    gsap.utils.toArray('[data-animate="block-up"]').forEach((el) => {
      gsap.set(el, { opacity: 0, y: 90 });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el, start: 'top 90%', toggleActions: 'play none none none',
        },
        y: 0, opacity: 1, duration: 1.3, ease: 'power3.out',
      });
    });

    // ========== IMAGE / VIDEO REVEAL ==========
    gsap.utils.toArray('[data-animate="reveal"]').forEach((el) => {
      gsap.set(el, { clipPath: 'inset(0 0 100% 0)', y: 50 });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el, start: 'top 85%', toggleActions: 'play none none none',
        },
        clipPath: 'inset(0 0 0% 0)', y: 0, duration: 1.4, ease: 'power4.out',
      });
    });

    ScrollTrigger.refresh();
  }, []);
}

