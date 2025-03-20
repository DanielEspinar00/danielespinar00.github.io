const expLevel = {
    Basic: "Basic",
    Intermediate: "Intermediate",
    Experienced: "Experienced",
    Expert: "Expert"
  };


// Variable definition
const fullname = "Daniel Espinar Jiménez";
const charge = "System Developer";
const email = "danielespinar00@gmail.com";
const about_text = "I'm a computer engineer with a strong ability to learn new tools or skills quickly, as well as analyze problems and propose solutions. I have no problem working in teams with multiple people in the same project, contributing with my opinion when needed, or working in a project by myself.";
const linkedinUrl = "https://www.linkedin.com/in/daniel-espinar-jimenez/";
const githubUrl = "https://github.com/DanielEspinar00";
const copyright = `Copyright &#169; 2024 ${fullname}. All Rights Reserved.`;

const experienceList = [
    { name: "Python", level: expLevel.Experienced },
    { name: "C", level: expLevel.Experienced },
    { name: "Java", level: expLevel.Intermediate },
    { name: "Docker", level: expLevel.Experienced },
    { name: "Kubernetes", level: expLevel.Experienced },
    { name: "Redis", level: expLevel.Basic },
    { name: "PostgreSQL", level: expLevel.Basic },
    { name: "Linux", level: expLevel.Intermediate },
    { name: "Unity", level: expLevel.Intermediate },
];

const projects = [
    {
    title: "Undergraduate Thesis (TFG)",
    image: "./assets/TFG.jpg",
    githubBtn: "https://github.com/DanielEspinar00/TFG_DigitalTwin",
    demoBtn: "https://drive.google.com/drive/folders/12Dqh0Jg6YFEvVmqq1mSMuo2Gl967dH-P?usp=sharing"
    },
    {
    title: "Master's Thesis (TFM)",
    image: "./assets/TFM.jpg",
    githubBtn: null /*"https://github.com/DanielEspinar00/TFM_DigitalTwin_RVA"*/,
    demoBtn: "https://drive.google.com/file/d/1ipoC8131qcDGaT29GUZmBBgEjKJCGzHr/view?usp=sharing"
    },
    {
    title: "Current Work Project",
    image: "./assets/NodoIOT.jpg",
    githubBtn: null,
    demoBtn: null
    },
    // Agrega más proyectos si es necesario
];

// Functions
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".phone-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function map_text(className, value){
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = value;
    }
}
function map_href(className, value){
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].href = value;
    }
}

function map_clickUrl(className, value){
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].onclick =  function() {
            location.href = value;
	};
    }
}



// Variables mapping
map_text("fullname", fullname);
map_text("charge", charge);
map_text("copyright", copyright);
map_text("email", email)
map_text("about_text", about_text)

map_clickUrl("linkedinClick", linkedinUrl);
map_clickUrl("githubClick", githubUrl);
map_clickUrl("emailClick", `mailto:${email}`)

const experienceContainer = document.getElementById('experience-container');

experienceList.forEach(item => {
  const article = document.createElement('article');
  const img = document.createElement('img');
  img.src = "./assets/checkmark.png";
  img.alt = "Experience icon";
  img.classList.add("icon");
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = item.name;
  const p = document.createElement('p');
  p.textContent = item.level;
  
  div.appendChild(h3);
  div.appendChild(p);
  article.appendChild(img);
  article.appendChild(div);
  experienceContainer.appendChild(article);
});

// Obtener el contenedor de proyectos en el HTML
const projectsContainer = document.getElementById('projects-container');

// Generar dinámicamente los elementos de proyecto
projects.forEach(project => {
    // Crear el contenedor principal del proyecto
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container', 'color-container');
    
    // Crear el título del proyecto
    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    titleElement.classList.add('experience-sub-title', 'project-title');
    projectContainer.appendChild(titleElement);

    // Crear el contenedor de la imagen
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('article-container');
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;
    image.classList.add('project-img');
    imageContainer.appendChild(image);
    projectContainer.appendChild(imageContainer);
    
    // Crear el contenedor de los botones
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');
  
    // Crear el botón para GitHub
    if(project.githubBtn != null){
        const githubButton = document.createElement('button');
        githubButton.textContent = 'Github';
        githubButton.classList.add('btn', 'btn-color-2', 'project-btn');
        githubButton.addEventListener('click', function() {
          window.location.href = project.githubBtn;
        });
        buttonContainer.appendChild(githubButton);
    }
  
    // Crear el botón para Live Demo
    if(project.demoBtn != null){
        const liveDemoButton = document.createElement('button');
        liveDemoButton.textContent = 'Demo';
        liveDemoButton.classList.add('btn', 'btn-color-2', 'project-btn');
        liveDemoButton.addEventListener('click', function() {
        window.location.href = project.demoBtn;
        });
        buttonContainer.appendChild(liveDemoButton);
    }
  
    // Agregar el contenedor de botones al contenedor principal del proyecto
    projectContainer.appendChild(buttonContainer);
  
    // Agregar el proyecto al contenedor de proyectos en el HTML
    projectsContainer.appendChild(projectContainer);
});


  
