const projects = [
  {
    title: "PraeHire (Live AI App)",
    description: "An AI-powered CV tailor and job application automation platform. Built by Prae Technologies.",
    videoLink: "assets/PraeHire.mp4",
    liveLink: "https://praehire.web.app"
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
    <div style="margin-top:1rem">
      ${p.videoLink ? `<a href="${p.videoLink}" target="_blank" style="color:#00aaff; margin-right:15px; text-decoration:none;">Demo</a>` : ''}
      ${p.liveLink ? `<a href="${p.liveLink}" target="_blank" style="color:#00aaff; text-decoration:none;">Live Site</a>` : ''}
    </div>`;
  container.appendChild(card);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('is-visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.animated-section').forEach(s => observer.observe(s));

document.querySelector('footer p').innerText = `© ${new Date().getFullYear()} Jerry Adedurin. High Honors Graduate.`;
