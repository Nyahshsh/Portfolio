// ==========================================
// main.js
// This file grabs my info from data.json and
// puts it onto the page using JavaScript.
// That way I only have to update data.json
// whenever I want to add a new project, skill,
// or education entry.
// ==========================================

// Wait until the page has fully loaded before running my code
document.addEventListener("DOMContentLoaded", function () {

  setupMenuButton();
  loadPortfolioData();

});

// ------------------------------------------
// Makes the hamburger menu open and close
// on small screens
// ------------------------------------------
function setupMenuButton() {
  var menuBtn = document.getElementById("menu-btn");
  var navMenu = document.getElementById("nav-menu");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");
  });
}

// ------------------------------------------
// Fetches data.json and then calls the
// functions that fill in the page
// ------------------------------------------
function loadPortfolioData() {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // data is now a normal JavaScript object
      fillInProfile(data.profile);
      fillInSkills(data.skills);
      fillInProjects(data.projects);
      fillInEducation(data.education);
    })
    .catch(function (error) {
      // This runs if something goes wrong, like a typo in data.json
      console.log("There was a problem loading data.json:", error);
    });
}

// ------------------------------------------
// PROFILE (Home / About / Contact)
// ------------------------------------------
function fillInProfile(profile) {
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-tagline").textContent = profile.tagline;
  document.getElementById("profile-bio").textContent = profile.bio;
  document.getElementById("profile-location").textContent = profile.location;
  document.getElementById("profile-email-text").textContent = profile.email;

  var emailLink = document.getElementById("profile-email-link");
  emailLink.textContent = profile.email;
  emailLink.href = "mailto:" + profile.email;
}

// ------------------------------------------
// SKILLS
// I loop through every skill in the array
// and build one card for each one
// ------------------------------------------
function fillInSkills(skills) {
  var container = document.getElementById("skills-container");
  container.innerHTML = ""; // clear it out first, just in case

  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];

    // Build the outer card
    var card = document.createElement("div");
    card.className = "skill-card";

    // Top row with the skill name and category
    var topRow = document.createElement("div");
    topRow.className = "skill-top-row";

    var nameSpan = document.createElement("span");
    nameSpan.textContent = skill.name;

    var categorySpan = document.createElement("span");
    categorySpan.textContent = skill.category;

    topRow.appendChild(nameSpan);
    topRow.appendChild(categorySpan);

    // The progress bar
    var barBackground = document.createElement("div");
    barBackground.className = "skill-bar-background";

    var barFill = document.createElement("div");
    barFill.className = "skill-bar-fill";
    barFill.style.width = skill.level + "%";

    barBackground.appendChild(barFill);

    // Put it all together
    card.appendChild(topRow);
    card.appendChild(barBackground);

    container.appendChild(card);
  }
}

// ------------------------------------------
// PROJECTS
// Same idea as skills, one loop building
// one project card at a time
// ------------------------------------------
function fillInProjects(projects) {
  var container = document.getElementById("projects-container");
  container.innerHTML = "";

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    var card = document.createElement("div");
    card.className = "project-card";

    var title = document.createElement("h3");
    title.textContent = project.title;

    var description = document.createElement("p");
    description.textContent = project.description;

    // A little wrapper for all the tag pills
    var tagsWrapper = document.createElement("div");
    for (var j = 0; j < project.tags.length; j++) {
      var tagSpan = document.createElement("span");
      tagSpan.className = "project-tag";
      tagSpan.textContent = project.tags[j];
      tagsWrapper.appendChild(tagSpan);
    }

    var link = document.createElement("a");
    link.className = "project-link";
    link.href = project.link;
    link.textContent = "View Project ->";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tagsWrapper);
    card.appendChild(link);

    container.appendChild(card);
  }
}

// ------------------------------------------
// EDUCATION
// ------------------------------------------
function fillInEducation(educationList) {
  var container = document.getElementById("education-container");
  container.innerHTML = "";

  for (var i = 0; i < educationList.length; i++) {
    var entry = educationList[i];

    var card = document.createElement("div");
    card.className = "education-card";

    var period = document.createElement("p");
    period.className = "period";
    period.textContent = entry.period;

    var title = document.createElement("h3");
    title.textContent = entry.title;

    var place = document.createElement("p");
    place.className = "place";
    place.textContent = entry.place;

    var description = document.createElement("p");
    description.textContent = entry.description;

    card.appendChild(period);
    card.appendChild(title);
    card.appendChild(place);
    card.appendChild(description);

    container.appendChild(card);
  }
}

// ------------------------------------------
// CONTACT FORM
// It does not send an email anywhere yet.
// It just stops the page from refreshing and
// shows a simple alert message instead.
// ------------------------------------------
var contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the form from reloading the page
  alert("Thanks for your message! (This form is not connected to anything yet.)");
  contactForm.reset();
});
