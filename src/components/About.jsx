import './About.css';
import ShinyText from './ShinyText.jsx';
import Particles from './Particles.jsx';

const STATS = [
  { value: '8种', label: 'Ai工具' },
  { value: '3', label: '核心项目' },
  { value: '银奖', label: '创新大赛银奖' },
  { value: '3', label: '编程语言' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-particles">
        <Particles
          particleColors={["#00ffd0", "#66ffe0", "#33ffd0"]}
          particleCount={250}
          particleSpread={8}
          speed={0.08}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
        />
      </div>
      <div className="container">
        <div className="about-content">
          <div className="profile-card">
            <div className="profile-avatar">
              <div className="profile-avatar-inner">
                <span className="profile-initials">ZQY</span>
              </div>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">曾钦滢</h3>
              <div className="profile-contact">
                <div className="profile-item">
                  <span className="profile-label">电话</span>
                  <span className="profile-value">18224969612</span>
                </div>
                <div className="profile-item">
                  <span className="profile-label">邮箱</span>
                  <span className="profile-value">2544290857@qq.com</span>
                </div>
                <div className="profile-item">
                  <span className="profile-label">学校</span>
                  <span className="profile-value">天津外国语大学</span>
                </div>
                <div className="profile-item">
                  <span className="profile-label">专业</span>
                  <span className="profile-value">数字媒体技术</span>
                </div>
              </div>
            </div>
          </div>
          <span className="section-label" data-animate="section-label">About</span>
          <h2 className="section-title" data-animate="section-title"><ShinyText text="关于我" /></h2>
          <p className="about-bio" data-animate="text-up">
            我是曾钦滢，一名数字媒体技术专业的复合型人才，融合三维交互开发、
            视觉设计、编程开发、项目统筹多重能力。熟练 Unity 虚拟仿真开发与
            平面视觉设计，掌握多门编程语言，拥有红色数字展馆、智能机器人
            两大核心科创项目经历。
          </p>
          <p className="about-bio-secondary" data-animate="text-up">
            独立完成策划、开发、赛事申报全流程，获国家级竞赛银奖。学生工作
            积累新媒体运营、团队管理、活动统筹实战经验，擅长数据复盘与多方
            协同推进任务落地。
          </p>
          <div className="about-stats" data-animate="card-stagger">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





