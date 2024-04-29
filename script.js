// Variable definition
const fullname = "Daniel Espinar Jiménez";
const charge = "System Developer";
const email = "danielespinar00@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/daniel-espinar-jim%C3%A9nez-983562228/";
const githubUrl = "https://github.com/DanielEspinar00";
const copyright = `Copyright &#169; 2024 ${fullname}. All Rights Reserved.`;


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

map_clickUrl("linkedinClick", linkedinUrl);
map_clickUrl("githubClick", githubUrl);
map_clickUrl("emailClick", `mailto:${email}`)

