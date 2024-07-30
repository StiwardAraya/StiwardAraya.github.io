/*
* toggleMenu
*
* Defines a boolean variable that indicates if the menu is visible or not
* and uses it as a condition in order to assign a css class to the menu.
* 
* This function is called everytime the responsive menu is clicked to make 
* the menu visible or to hide it.
*/
let visibleMenu = false;
function toggleMenu(){
    document.getElementById("nav").classList = visibleMenu ? "" : "responsive";
    visibleMenu = !visibleMenu;
}

/*
* select
*
* Hides the responsive menu when an option is selected
*/
function select(){
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}


/*
* skillsFX
*
* Detects when the window scroll is at 300 pixels distance relative to 
* the top of the skills section.
*
* When the window scroll is near the section the function add the css animation
* classes to every each skill bar.
*/
function skillsFX(){
    const skills = document.getElementById("skills");
    const skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillsDistance >= 300){
        const skillsBars = document.getElementsByClassName("progress");
        skillsBars[0].classList.add("html");
        skillsBars[1].classList.add("css");
        skillsBars[2].classList.add("javascript");
        skillsBars[3].classList.add("java");
        skillsBars[4].classList.add("sql");
        skillsBars[5].classList.add("react");
        skillsBars[6].classList.add("communication");
        skillsBars[7].classList.add("problem-solving");
        skillsBars[8].classList.add("adaptability");
        skillsBars[9].classList.add("creativity");
    }
}

//Calls skillsFX when the user scrolls
window.onscroll = function(){
    skillsFX();
}

function downloadCV(){
    const link = document.createElement('a');
    link.href = 'assets/documents/Stiward CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

