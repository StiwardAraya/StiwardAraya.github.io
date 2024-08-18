const responsiveBtn = document.getElementById("responsive-btn");

/**
 * Toggles the responsive class on the navigation menu when the button is clicked.
 *
 * @function
 * @name responsiveMenuToggle
 * @returns {void}
 */
responsiveBtn.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("responsive");
});

/**
 * Hides the responsive menu when an option is selected.
 * Also sets the visibleMenu variable to false.
 *
 * @function
 * @name select
 * @returns {void}
 */
const select = () => {
  document.getElementById("nav").classList = "";
  visibleMenu = false;
};

/**
 * Detects when the window scroll is at 300 pixels distance relative to
 * the top of the skills section.
 *
 * When the window scroll is near the section, the function adds CSS animation
 * classes to each skill bar.
 *
 * @function
 * @name skillsFX
 * @returns {void}
 */
const skillsFX = () => {
  const skills = document.getElementById("skills");
  const skillsDistance =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (skillsDistance >= 300) {
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
    skillsBars[9].classList.add("proactivity");
  }
};

//Calls skillsFX when the user scrolls
window.onscroll = function () {
  skillsFX();
};

/**
 * Creates a link element with a href in the CV local URL,
 * adds the link to the button as a child, triggers the link and then
 * removes the link from the button.
 *
 * @function
 * @name downloadCV
 * @returns {void}
 */
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "assets/documents/Stiward CV.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
