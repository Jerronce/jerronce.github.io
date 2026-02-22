// --- Dynamic Projects Section ---
// To add a new project, just copy one of the blocks and change the details.
// Use 'videoLink' for a video file, or 'liveLink' for a live website URL.
const projects = [
  {
    title: "Radar App (Fintech)",
    description: "A fintech app for collective savings, helping users contribute and manage money together in USD.",
    videoLink: "assets/Radar.mp4"
  },
  {
    title: "Farad App (Logistics)",
    description: "A logistics-tech app designed to connect users with trucks for moving heavy goods and materials.",
    videoLink: "assets/Farad.mp4" 
  },

  {
    title: "PraeHire (Live AI App for Jobseekers)",
    description: "An AI app for job seekers that tailors their cv, but they have to imprt their made cv, then after auto apply to job platforms to any with just the link, and they can also practice their interview in the website and app also.  check out the app at praehire.web.app",
    videoLink: "assets/PraeHire.mp4" 
  },
      <a href="https://github.com/jerronce" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
  {
    title: "Portfolio Website",
    description: "The personal portfolio site you are currently viewing, built with HTML, CSS, and vanilla JavaScript.",
    liveLink: "https://jerronce.github.io"
  }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  // Create the links based on what's available in the projects list
  let linksHTML = '';
  if (project.videoLink) {
    linksHTML += `<a href="${project.videoLink}" target="_blank">Watch Video</a>`;
  }
  if (project.liveLink) {
    linksHTML += `<a href="${project.liveLink}" target="_blank">View Live Site</a>`;
  }

  // This is the HTML structure for each project card
  projectCard.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-links">
      ${linksHTML}
    </div>
  `;

  projectsContainer.appendChild(projectCard);
});


// --- Scroll Animation Logic ---
const sections = document.querySelectorAll('.animated-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the section is visible
});

sections.forEach(section => {
  observer.observe(section);
});
