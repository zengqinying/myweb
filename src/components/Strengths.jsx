
 import './Strengths.css';
import ShinyText from './ShinyText.jsx';

 const STRENGTHS = [
   {
     icon: (
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
         <path d="M12 2L2 7l10 5 10-5-10-5z" />
         <path d="M2 17l10 5 10-5" />
         <path d="M2 12l10 5 10-5" />
       </svg>
     ),
     title: '三维交互开发',
     desc: '熟练 Unity 场景搭建、模型导入、光照烘焙、交互逻辑开发，独立完成虚拟展馆全流程搭建。',
   },
   {
     icon: (
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
         <circle cx="12" cy="12" r="3" />
         <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
       </svg>
     ),
     title: '视觉设计',
     desc: '精通 Photoshop 平面视觉设计，熟练掌握视频剪辑、网页设计全流程制作，兼具审美鉴赏与设计执行能力。',
   },
   {
     icon: (
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
         <polyline points="16 18 22 12 16 6" />
         <polyline points="8 6 2 12 8 18" />
       </svg>
     ),
     title: '编程开发',
     desc: '熟练掌握 Python、Java、C++ 三门编程语言，精通数据结构与面向对象编程，具备规范代码编写与项目开发能力。',
   },
   {
     icon: (
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
         <circle cx="9" cy="7" r="4" />
         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
       </svg>
     ),
     title: '项目管理',
     desc: '项目统筹与团队管理能力突出，曾主导竞赛项目并获银奖，具备多职能团队协同推进的全链条经验。',
   },
   {
     icon: (
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
         <path d="M12 20h9" />
         <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
       </svg>
     ),
     title: 'AI 工具运用',
     desc: '熟练使用Codex，Midjourney, DeepSeek，ChatGPT, Trae， 豆包，秘塔，kimi等',
   },
   {
     icon: (
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
         <polyline points="22,6 12,13 2,6" />
       </svg>
     ),
     title: '新媒体运营',
     desc: '全年产出 50+ 份运营视觉素材，推文平均互动率提升 6%，擅长数据复盘与内容策略优化。',
   },
 ];

 export default function Strengths() {
   return (
     <section id="strengths" className="strengths">
       <div className="container">
         <div className="strengths-header">
           <span className="section-label" data-animate="section-label">Strengths</span>
           <h2 className="section-title" data-animate="section-title"><ShinyText text="个人优势" /></h2>
           <p className="section-subtitle">
             数字媒体技术复合型人才，融合设计与技术的多重能力
           </p>
         </div>
         <div className="strengths-grid" data-animate="card-stagger">
           {STRENGTHS.map((item, i) => (
             <div key={i} className="strength-card">
               <div className="strength-icon">{item.icon}</div>
               <h3 className="strength-title">{item.title}</h3>
               <p className="strength-desc">{item.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }






