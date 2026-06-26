import { useState, useRef, useEffect, useCallback } from "react";
const BASE = import.meta.env.BASE_URL;
import "./VideoGallery.css";

const VIDEOS = [
  { src: BASE + "videos/emotion-robot-1.mp4", poster: BASE + "images/video-poster-1.webp", label: "样机演示 01" },
  { src: BASE + "videos/emotion-robot-2.mp4", poster: BASE + "images/video-poster-2.webp", label: "样机演示 02" },
  { src: BASE + "videos/emotion-robot-3.mp4", poster: BASE + "images/video-poster-3.webp", label: "样机演示 03" },
  { src: BASE + "videos/emotion-robot-4.mp4", poster: BASE + "images/video-poster-4.webp", label: "样机演示 04" },
  { src: BASE + "videos/emotion-robot-5.mp4", poster: BASE + "images/video-poster-5.webp", label: "样机演示 05" },
];

export default function VideoGallery({ compact = false }) {
  const total = VIDEOS.length;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const autoTimerRef = useRef(null);
  const galleryRef = useRef(null);
  const preloadRef = useRef(null);

  const clamp = useCallback((i) => ((i % total) + total) % total, [total]);

  const goNext = useCallback(() => {
    setCurrentIdx((prev) => clamp(prev + 1));
  }, [clamp]);

  const goPrev = useCallback(() => {
    setCurrentIdx((prev) => clamp(prev - 1));
  }, [clamp]);

  const jumpTo = useCallback((i) => {
    if (i === currentIdx) return;
    setCurrentIdx(i);
  }, [currentIdx]);

  const handleVideoEnded = useCallback(() => {
    clearTimeout(autoTimerRef.current);
    autoTimerRef.current = setTimeout(() => goNext(), 800);
  }, [goNext]);

  const handleCanPlay = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Preload adjacent video sources
  useEffect(() => {
    const nextIdx = clamp(currentIdx + 1);
    if (VIDEOS[nextIdx]) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = VIDEOS[nextIdx].src;
      link.as = "video";
      preloadRef.current = link;
      document.head.appendChild(link);
    }
    return () => {
      if (preloadRef.current) {
        document.head.removeChild(preloadRef.current);
      }
    };
  }, [currentIdx, clamp]);

  // IntersectionObserver
  useEffect(() => {
    const el = galleryRef.current;
    if (!el || isVisible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  // Play/pause on index change
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoading(true);
    video.load();
    video.playbackRate = 0.7;

    if (currentIdx === 0 && !isVisible) return;

    const p = video.play();
    if (p) p.catch(() => {});
  }, [currentIdx, isVisible]);

  if (total === 0) return null;

  return (
    <div className="video-gallery" ref={galleryRef}>
     {!compact && (
      <div className="gallery-header">
        <div className="gallery-header-left">
          <svg className="gallery-header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          <h4>项目策划</h4>
        </div>
        <span className="gallery-header-counter">
          {currentIdx + 1} / {total}
        </span>
      </div>
     )}

      <div className="gallery-stage-wrap">
        <div className="gallery-stage">
          <div className={"gallery-page fade-in" + (isLoading ? " loading" : "")}>
            {isLoading && <div className="gallery-loading"><div className="gallery-spinner" /></div>}
            <video
              ref={videoRef}
              key={currentIdx}
              src={VIDEOS[currentIdx].src}
              poster={VIDEOS[currentIdx].poster}
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              onCanPlay={handleCanPlay}
            />
          </div>
        </div>

        <div className="gallery-nav">
          <button className="gallery-nav-btn" onClick={goPrev} title="上一页">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="gallery-dots">
            {VIDEOS.map((_, i) => (
              <button key={i} className={"gallery-dot" + (i === currentIdx ? " active" : "")} onClick={() => jumpTo(i)} title={"第 " + (i + 1) + " 页"} />
            ))}
          </div>

          <button className="gallery-nav-btn" onClick={goNext} title="下一页">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
