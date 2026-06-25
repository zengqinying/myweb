import './Projects.css';
import VideoGallery from './VideoGallery.jsx';
import ShinyText from './ShinyText.jsx';
import StarBorder from './StarBorder.jsx';
const PROJECTS = [
  {
    title: '情感交互型宠物机器人',
    category: 'AI硬件 / 创新大赛',
    description: '从产品定义到样机落地，全流程主导情感交互型宠物机器人研发。视频展示涵盖AI情感识别系统搭建、硬件交互原型设计、商业模式与市场分析方案，完整呈现科创赛事银奖项目的研发全貌。',
    color: '#0088ff',
    tags: ['AI情感识别', '硬件交互', '商业计划', '银奖'],
  },
  {
    title: '智能宠物机器人设计实践',
    category: 'AI机器人 / 省级重点项目',
    description: '以省级重点项目标准统筹AI情感交互机器人全周期开发：从用户需求调研入手，深入独居青年与空巢老人群体，明确情感陪伴的核心痛点；主导硬件结构设计与迭代，协同完成情绪识别算法训练与陪伴交互场景开发，输出完整样机方案与全栈技术文档。',
    color: '#7c5cfc',
    tags: ['产品研发', '团队管理', '用户调研', '样机测试'],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-bg" style={{ backgroundImage: "url(/images/projects-bg.png)", opacity: 0.3 }} />
      <div className="container">
        <div className="projects-header">
          <span className="section-label" data-animate="section-label">Projects</span>
          <h2 className="section-title" data-animate="section-title"><ShinyText text="精选项目" /></h2>
          <p className="section-subtitle">
            从虚拟展馆到智能机器人，每个项目都是技术与设计的深度融合
          </p>
        </div>
        <div className="projects-subsection">
          <div className="subsection-label">
            <span className="subsection-line" />
            <StarBorder as="span" className="subsection-star" color="#00d4b0" speed="5s" thickness={2}><span>影视作品</span></StarBorder>
            <span className="subsection-line" />
          </div>
          <div className="project-video-block" data-animate="block-up">
            <div className="video-container" data-animate="reveal">
              <video
                className="video-player"
                src="/videos/northbureau.mp4"
                poster="/images/northbureau-poster.jpg"
                controls
                preload="metadata"
                playsInline
              >
                您的浏览器不支持视频播放
              </video>
            </div>
            <div className="video-info">
              <span className="project-category">AI 党史纪录片</span>
              <h3 className="video-title">中共中央北方局革命史</h3>
              <p className="video-desc">
                6分钟AI党史纪实短片《中共中央北方局革命史》｜史料整理&amp;视频文案主创。
                依托天津北方局纪念馆原始史料，独立完成短片叙事创作，系统梳理1924-1945年
                中共中央北方局建立、重建、撤销全过程，还原一二·九运动、华北党组织重建、
                敌后抗日根据地建设等关键史实，聚焦刘少奇主持北方局时期的革命工作，
                整合历史照片、旧址文物、辖区地图素材完成6分钟红色党史短片制作。
              </p>
              <div className="project-tags">
                <span className="project-tag">AI视频制作</span>
                <span className="project-tag">史料整理</span>
                <span className="project-tag">文案创作</span>
                <span className="project-tag">党史教育</span>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-subsection">
          <div className="subsection-label">
            <span className="subsection-line" />
            <StarBorder as="span" className="subsection-star" color="#00d4b0" speed="5s" thickness={2}><span>项目策划</span></StarBorder>
            <span className="subsection-line" />
          </div>
          <div className="projects-grid">
            <div className="project-card with-video" data-animate="block-up">
              <div className="project-visual" style={{ background: 'transparent' }}>
                <VideoGallery compact />
              </div>
              <div className="project-info">
                <span className="project-category">{PROJECTS[0].category}</span>
                <h3 className="project-title">{PROJECTS[0].title}</h3>
                <p className="project-desc">{PROJECTS[0].description}</p>
                <div className="project-tags">
                  {PROJECTS[0].tags.map((tag, j) => (
                    <span key={j} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-subsection">
          <div className="subsection-label">
            <span className="subsection-line" />
            <StarBorder as="span" className="subsection-star" color="#00d4b0" speed="5s" thickness={2}><span>产品设计</span></StarBorder>
            <span className="subsection-line" />
          </div>
          <div className="project-video-block" data-animate="block-up">
            <div className="video-container" data-animate="reveal">
              <video
                className="video-player"
                src="/videos/innovation-project.mp4"
                poster="/images/innovation-project-poster.jpg"
                controls
                preload="metadata"
                playsInline
                muted
              >
                您的浏览器不支持视频播放
              </video>
            </div>
            <div className="video-info">
              <span className="project-category">{PROJECTS[1].category}</span>
              <h3 className="project-title">{PROJECTS[1].title}</h3>
              <p className="project-desc">{PROJECTS[1].description}</p>
              <div className="project-tags">
                {PROJECTS[1].tags.map((tag, j) => (
                  <span key={j} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="projects-subsection">
          <div className="subsection-label">
            <span className="subsection-line" />
            <StarBorder as="span" className="subsection-star" color="#00d4b0" speed="5s" thickness={2}><span>交互设计</span></StarBorder>
            <span className="subsection-line" />
          </div>
          <div className="project-video-block" data-animate="block-up">
            <div className="video-container" data-animate="reveal">
              <video
                className="video-player"
                src="/videos/exhibition-hall.mp4"
                poster="/images/exhibition-hall-poster.jpg"
                controls
                preload="metadata"
                playsInline
              >
                您的浏览器不支持视频播放
              </video>
            </div>
            <div className="video-info">
              <span className="project-category">Unity 3D 展馆演示</span>
              <h3 className="video-title">中共北方局数字复原虚拟展馆</h3>
              <p className="video-desc">
                基于天津北方局纪念馆原始史料，独立完成从遗址考据、建筑复原到Unity 3D交互开发的完整闭环。
                系统梳理1924—1945年中共中央北方局发展历程，复原历史建筑群与空间布局；
                构建第一人称自由漫游、展品弹窗知识解说、历史影像资料嵌入播放等交互系统，
                为用户带来走进历史的红色教育沉浸式数字体验。
              </p>
              <div className="project-tags">
                <span className="project-tag">Unity 3D</span>
                <span className="project-tag">虚拟展馆</span>
                <span className="project-tag">第一人称漫游</span>
                <span className="project-tag">交互开发</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}










