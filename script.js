projects = [
  {
    title: "Todo Application",
    description: "This is a simple todo application that can help you take down some task for your day. It is built using HTML, CSS and JavaScript.",
    link: "./todo-app/"
  },
  {
    title: "Quiz Application",
    description: "Do you know which planet is called 'Blue Planet'? If you know then you can try this quiz application.",
    link: "./quiz-app/"
  },
  {
    title: "Note Taking Application",
    description: "A simple note taking application that will store you notes in your browser local storage.",
    link: "./note-taking-app/"
  },
  {
    title: "Password Generator",
    description: "This will help you generate strong password so that you will never get hacked again.",
    link: "./password-generator/"
  },
  {
    title: "Mutual Fund SIP Return Calculator",
    description: "Do you always want to know how much you will earn if you do a SIP of some fixed amount, no need to wait anymore. Check this out.",
    link: "./mutual-fund-calculator/"
  },
  {
    title: "Age Calculator",
    description: "Know your age if you know the birthday. This is a simple age calculator built using HTML, CSS and JavaScript.",
    link: "./age-calculator/"
  },
  {
    title: "Quote Generator",
    description: "A quote a day keeps....I think I am saying quote wrong, check this out to know the correct quotes by people.",
    link: "./quote-generator-app/"
  },
  {
    title: "Tax Calculator",
    description: "A tax calculator for you salary bracked for indian financial year 2024-25",
    link: "./indian-tax-calculator-2024/"
  }
]


function createCard(projects) {
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
}

createCard(projects);
