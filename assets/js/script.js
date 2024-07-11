let visibleMenu = false;
function toggleMenu(){
    document.getElementById("nav").classList = visibleMenu ? "" : "responsive";
    visibleMenu = !visibleMenu;
}

function select(){
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}

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

window.onscroll = function(){
    skillsFX();
}

