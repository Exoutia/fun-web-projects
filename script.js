projects = [
  {
    title: "Todo Application",
    description: "A simple todo application built using HTML, CSS and JavaScript",
    link: "./todo-app/"
  },
  {
    title: "Quiz Application",
    description: "A simple quiz application built using HTML, CSS and JavaScript",
    link: "./quiz-app/"
  },
  {
    title: "Note Taking Application",
    description: "A simple note taking application built using HTML, CSS and JavaScript",
    link: "./note-taking-app/"
  },
  {
    title: "Password Generator",
    description: "A simple password generator built using HTML, CSS and JavaScript",
    link: "./password-generator/"
  },
  {
    title: "Mutual Fund SIP Return Calculator",
    description: "A simple mutual fund SIP return calculator built using HTML, CSS and JavaScript",
    link: "./mutual-fund-calculator/"
  },
  {
    title: "Age Calculator",
    description: "A simple age calculator built using HTML, CSS and JavaScript",
    link: "./age-calculator/"
  },
  {
    title: "Quote Generator",
    description: "A simple quote generator built using HTML, CSS and JavaScript",
    link: "./quote-generator-app/"
  }
]

const projectsDiv = document.getElementById("projects");

projects.forEach(project => {
  const card = document.createElement("div");
  card.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <a href="${project.link}">View Project</a>
  `;
  card.classList.add("glassy-card");
  projectsDiv.appendChild(card);
})
