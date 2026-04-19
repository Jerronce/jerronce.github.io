// --- Dynamic Projects Section ---
const projects = [
  {
    title: "PraeHire (Live AI App)",
    description: "An AI-powered CV tailor and job application automation platform. Features interview practice and direct platform integration. Built by Prae Technologies.",
    videoLink: "assets/PraeHire.mp4",
    liveLink: "https://praehire.web.app"
  },
  {
    title: "Radar App (Fintech)",
    description: "Collective savings platform helping groups manage contributions in USD. Focused on financial security and transparency.",
    videoLink: "assets/Radar.mp4"
  },
  {
    title: "Farad App (Logistics)",
    description: "Logistics-tech solution connecting heavy goods and materials to truck providers in real-time.",
    videoLink: "assets/Farad.mp4" 
  },
  {
    title: "Portfolio 2026",
    description: "Personal high-performance portfolio showcasing academic honors and 56+ GitHub repositories.",
    liveLink: "https://jerronce.github.io"
  }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  let linksHTML = '';
  if (project.videoLink) {
    linksHTML += `<a href="${project.videoLink}" target="_blank" class="project-link"><i class="fas fa-play-circle"></i> Watch Demo</a>`;
  }
  if (project.liveLink) {
    linksHTML += `<a href="${project.liveLink}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live Site</a>`;
  }

  projectCard.innerHTML = `
    <div class="card-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-links">${linksHTML}</div>
    </div>
  `;
  projectsContainer.appendChild(projectCard);
});

// --- Enhanced Scroll Observer ---
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animated-section').forEach(section => observer.observe(section));

// --- Dynamic Footer Year ---
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Jerry Adedurin. High Honors Graduate.`;
