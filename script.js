const projects = [
  {
    title: "PraeHire (Live AI App)",
    description: "An AI-powered CV tailor and job application automation platform. Built by Prae Technologies.",
    videoLink: "assets/PraeHire.mp4",
    liveLink: "https://praehire.com"
  },
  {
    title: "Radar App (Fintech)",
    description: "Collective savings platform helping groups manage contributions in USD.",
    videoLink: "assets/Radar.mp4"
  },
  {
    title: "Farad App (Logistics)",
    description: "Logistics-tech solution connecting heavy goods and truck providers.",
    videoLink: "assets/Farad.mp4" 
  }
];

const container = document.getElementById('projects-container');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    ${p.videoLink ? `<video class="project-video" controls preload="metadata" playsinline aria-label="${p.title} product demonstration"><source src="${p.videoLink}" type="video/mp4">Your browser cannot play this video. <a href="${p.videoLink}">Download the demonstration</a>.</video>` : ''}
    <div style="margin-top:1rem">
      ${p.videoLink ? `<a href="${p.videoLink}" target="_blank" rel="noopener noreferrer" style="color:#00aaff; margin-right:15px; text-decoration:none;">Open demo</a>` : ''}
      ${p.liveLink ? `<a href="${p.liveLink}" target="_blank" rel="noopener noreferrer" style="color:#00aaff; text-decoration:none;">Live Site</a>` : ''}
    </div>`;
  container.appendChild(card);
});

const sections = document.querySelectorAll('.animated-section');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });
  sections.forEach(s => observer.observe(s));
} else {
  sections.forEach(s => s.classList.add('is-visible'));
}

document.querySelector('footer p').innerText = `© ${new Date().getFullYear()} Jerry Adedurin. B.Sc. Computer Science Graduate, Magna Cum Laude | Founder of Prae Technologies.`;
