import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BrainCircuit,
  ChevronLeft,
  Code2,
  Database,
  Download,
  ExternalLink,
  Film,
  Gamepad2,
  Globe2,
  Image as ImageIcon,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Play,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1h1vuEhA6J2MeSeuAPda1Pw8k9eg_CETp?usp=sharing";
const LINKEDIN = "https://www.linkedin.com/in/besan-alamri-816722250?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
const EMAIL = "almrybysan18@gmail.com";

const projects = [
  {
    number: "01",
    title: "مختبر الزراعة الرقمية الذكية",
    english: "Smart Digital Agriculture Lab",
    category: "Web experience",
    description: "تجربة ويب تفاعلية تستكشف كيف يمكن للبيانات والذكاء الاصطناعي أن يقدما حلولًا أذكى للزراعة الحديثة.",
    tags: ["HTML", "AI concept", "Interactive"],
    accent: "violet",
    icon: Globe2,
    image: "https://lh3.googleusercontent.com/drive-storage/AJQWtBMw8ISsNXCJjT057m4ee9Hwrn8D25mTqODMWYbR93Q70pHCvkIC-KT8jLwEr3oweerQWNKJn0Ia5fd2DvXPc5ZDpu_xu_1ThdDwQSR1GeN_rTihpQ=s600",
    href: "https://drive.google.com/file/d/1w2UdQq3W6g-N_8ETeno9pnmlrKm_e7zD/view?usp=drivesdk",
  },
  {
    number: "02",
    title: "Smart Delivery Box",
    english: "Smart Delivery Box",
    category: "Product concept",
    description: "هوية بصرية وتصوّر لمنتج توصيل ذكي يربط بين التقنية، الأمان، وتجربة المستخدم في مشهد واحد.",
    tags: ["Visual design", "Concept", "Product"],
    accent: "cyan",
    icon: Layers3,
    image: "https://lh3.googleusercontent.com/drive-storage/AJQWtBMr2wgkFyyU2l3NWOV5r0UpG1iSzyXwZglTqhJ5vdW9D9sbeOzxQ8MknNMoB8bfqVpUwtFCTWr_dKLB4kDx4-Qh-vahus9j1lXICETjsXWJL0pxYQ=s600",
    href: "https://drive.google.com/file/d/13JPY5Oxb_O2__37BCIi-3WJUUF1TzkkC/view?usp=drivesdk",
  },
  {
    number: "03",
    title: "تجارب تفاعلية للتعلّم",
    english: "Interactive learning experiments",
    category: "Creative coding",
    description: "ألعاب وتجارب تعليمية تحوّل المفاهيم العلمية إلى لحظات تفاعلية سهلة الفهم وممتعة الاستكشاف.",
    tags: ["JavaScript", "Learning", "Game"],
    accent: "pink",
    icon: Gamepad2,
    image: "https://lh3.googleusercontent.com/drive-storage/AJQWtBP8O1Hgn-qE2dI4ge-oHIkVyl6r42fQwqe8HOoDzqA9xfKxxmV9sTuXXJTROpEJjznCntqwU1FvBoOdMxpmPCqyK1fqZvvQKL3L9iPRb-jWZT6Knw=s600",
    href: "https://drive.google.com/file/d/1gFVyfRXxLHG27R7bgdOzKGLdovkDL05y/view?usp=drivesdk",
  },
];

const services = [
  { icon: Code2, title: "Full Stack Development", text: "واجهات عملية، منطق واضح، وتجارب رقمية مصممة حول المستخدم." },
  { icon: BrainCircuit, title: "AI & Creative Tech", text: "أفكار تجمع الذكاء الاصطناعي بالتصميم لتصنع حلولًا أقرب للإنسان." },
  { icon: Network, title: "Networking Foundations", text: "فهم أساسيات الشبكات والبنية التي تجعل المنتجات الرقمية أكثر موثوقية." },
];

const certificates = [
  { icon: BrainCircuit, title: "أساسيات الذكاء الاصطناعي", meta: "Artificial Intelligence Fundamentals", color: "violet" },
  { icon: Network, title: "أساسيات الشبكات", meta: "Networking Fundamentals", color: "cyan" },
  { icon: Award, title: "TOT", meta: "Training of Trainers", color: "pink" },
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main dir="rtl" className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="العودة إلى البداية">
            <span className="brand-mark">BA<span>.</span></span>
            <span className="brand-copy"><strong>بيسان العمري</strong><small>AI · Full Stack</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>عني</a>
            <a href="#services" onClick={closeMenu}>ما أقدمه</a>
            <a href="#work" onClick={closeMenu}>أعمالي</a>
            <a href="#credentials" onClick={closeMenu}>الشهادات</a>
            <a href="#contact" onClick={closeMenu}>تواصل</a>
          </nav>
          <a href={`mailto:${EMAIL}`} className="header-cta">لنتحدث <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section id="top" className="hero-section section-pad">
        <div className="container hero-grid">
          <div className="hero-content reveal-up">
            <div className="status-pill"><span className="pulse-dot" /> متاحة لفرص وتعاونات جديدة</div>
            <p className="hero-kicker">Computer Engineer <span>+</span> Creative Technologist</p>
            <h1>أبني تجارب رقمية<br /><em>تفكّر بذكاء.</em></h1>
            <p className="hero-lead">أنا بيسان العمري، مهندسة حاسوب ومطوّرة Full Stack. أترجم الأفكار إلى منتجات وتجارب تجمع بين الكود، الذكاء الاصطناعي، والتصميم الواضح.</p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">استكشف الأعمال <ArrowLeft size={18} /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="button button-ghost">LinkedIn <ExternalLink size={16} /></a>
            </div>
            <div className="hero-metrics">
              <div><strong>03<span>+</span></strong><small>مجالات أقدّم فيها</small></div>
              <div><strong>∞</strong><small>فضول للتعلّم</small></div>
              <div><strong>01</strong><small>عقلية تبني بوضوح</small></div>
            </div>
          </div>

          <div className="hero-visual reveal-scale" aria-label="الصورة الشخصية لبيسان العمري">
            <div className="code-orbit orbit-back"><span>&lt;/&gt;</span><span>01</span><span>{"{}"}</span><span>AI</span><span>0110</span></div>
            <div className="code-orbit orbit-front"><span>const</span><span>build()</span><span>return</span><span>;</span></div>
            <div className="portrait-halo"><div className="halo-line" /><div className="portrait-frame"><img src="/manus-storage/profile_18e6fff2.jpeg" alt="بيسان العمري" /></div></div>
            <div className="visual-caption caption-top"><span>01</span><small>curious mind</small></div>
            <div className="visual-caption caption-bottom"><span>02</span><small>build with purpose</small></div>
            <div className="floating-chip chip-ai"><Sparkles size={14} /> AI / HUMAN</div>
            <div className="floating-chip chip-code"><Terminal size={14} /> &lt;code /&gt;</div>
          </div>
        </div>
        <div className="scroll-note"><span>مرّري للاستكشاف</span><div className="scroll-line" /></div>
      </section>

      <section id="about" className="about-section section-pad section-dark">
        <div className="container about-grid">
          <div className="about-aside"><span className="vertical-label">PROFILE / 01</span><div className="aside-line" /></div>
          <div className="about-copy">
            <SectionHeading eyebrow="نبذة قصيرة" title="التقنية عندي ليست غاية، بل لغة لصناعة أثر." copy="أؤمن أن أفضل المنتجات هي التي تبدو بسيطة للمستخدم، لأنها مبنية بعناية خلف الكواليس." />
            <div className="about-text-grid"><p>من تطوير الواجهات إلى بناء الأفكار التفاعلية، أحب أن أعمل في المساحة التي يلتقي فيها <strong>المنطق بالإبداع</strong>. أتعلم باستمرار، أجرّب بسرعة، وأحوّل كل مشروع إلى فرصة لفهم شيء جديد.</p><p>خلفيتي في هندسة الحاسوب، الشبكات، والذكاء الاصطناعي تمنحني منظورًا متكاملًا لبناء تجارب رقمية متينة، جميلة، وقابلة للتطور.</p></div>
            <div className="signature-row"><span className="signature">Besan<span>.</span></span><span className="signature-note">computer engineer / creative builder</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="ماذا أقدّم" title="من الفكرة الأولى إلى التجربة الأخيرة." copy="أجمع بين التفكير الهندسي والحسّ البصري لأبني أعمالًا لها وظيفة واضحة وشخصية مميزة." />
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title} style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
                <div className="card-icon"><Icon size={23} /></div><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#work" aria-label={`استكشف أعمال ${title}`}>اكتشف المسار <ArrowLeft size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section section-pad section-dark">
        <div className="container">
          <div className="work-head"><SectionHeading eyebrow="مختارات من الحقيبة" title="أعمال تحوّل الفضول إلى شيء يمكن رؤيته." copy="مجموعة مختارة من المشاريع والتجارب الموجودة داخل حقيبة الأعمال. اضغطي على أي مشروع لفتح ملفه الكامل." /><a className="text-link" href={DRIVE_FOLDER} target="_blank" rel="noreferrer">فتح حقيبة الأعمال <ExternalLink size={16} /></a></div>
          <div className="projects-list">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return <article className={`project-row accent-${project.accent}`} key={project.number}>
                <div className="project-meta"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span><Icon size={18} /></div>
                <div className="project-image-wrap"><img src={project.image} alt={project.title} /><div className="image-overlay"><Play size={19} fill="currentColor" /></div></div>
                <div className="project-info"><p className="project-english">{project.english}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                <a href={project.href} target="_blank" rel="noreferrer" className="project-link" aria-label={`فتح مشروع ${project.title}`}><ArrowUpRight size={20} /></a>
              </article>;
            })}
          </div>
          <div className="archive-banner"><div><ImageIcon size={19} /><span>المزيد من التجارب البصرية، الألعاب، والفيديوهات داخل الأرشيف الكامل.</span></div><a href={DRIVE_FOLDER} target="_blank" rel="noreferrer">استعراض الكل <ChevronLeft size={17} /></a></div>
        </div>
      </section>

      <section id="credentials" className="credentials-section section-pad">
        <div className="container credentials-grid">
          <div><SectionHeading eyebrow="التعلّم المستمر" title="شهادات تبني الأساس، وفضول يوسّع الأفق." copy="هذه ليست نهاية الرحلة؛ إنها نقاط مضيئة في مسار مستمر من التعلّم والتجريب." /><a href={DRIVE_FOLDER} target="_blank" rel="noreferrer" className="button button-outline"><Download size={17} /> استعراض الملفات والشهادات</a></div>
          <div className="certificate-stack">{certificates.map((certificate, index) => { const Icon = certificate.icon; return <div className={`certificate-card cert-${certificate.color}`} key={certificate.title}><div className="certificate-icon"><Icon size={20} /></div><div><strong>{certificate.title}</strong><span>{certificate.meta}</span></div><span className="certificate-no">0{index + 1}</span></div>; })}</div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad section-dark">
        <div className="container contact-card"><div className="contact-orb orb-left" /><div className="contact-orb orb-right" /><div className="contact-inner"><p className="eyebrow"><span /> لنصنع شيئًا جيدًا</p><h2>لديك فكرة؟<br /><em>لنتحدث عنها.</em></h2><p>إذا كان لديك مشروع، فرصة، أو حتى سؤال فضولي — يسعدني أن أسمع منك.</p><a href={`mailto:${EMAIL}`} className="email-link">{EMAIL} <ArrowUpRight size={19} /></a><div className="contact-links"><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={DRIVE_FOLDER} target="_blank" rel="noreferrer"><Database size={17} /> حقيبة الأعمال</a></div></div></div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><span>© 2026 Besan Alomari</span><span>مصمّمة بالكود والفضول <Sparkles size={14} /></span><a href="#top">العودة للأعلى <ArrowLeft size={15} /></a></div></footer>
    </main>
  );
}

export default Home;
