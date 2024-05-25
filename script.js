//JavaScript Document

//--------------------------------------------------- Menu Mobile ------------------------------------------------------

// Gets elements from HTML by ID's on variables
let menu = document.getElementById("header-menu-js");
let menuContent = document.getElementById("header-menu-content-js");

// Add EventListener, that listens for a "click" event on the menu Element
menu.addEventListener("click", function (event) {
    onMenuClick();
});

// Function that runs with every click on the menu element
function onMenuClick() {
    // Toggle "active" from menuContent
    menuContent.classList.toggle("active");
}

// =============== Makes the menu close when clicking outside ===============

// Adds EventListener, that listens to a "click" event on the document (the body from HTML)
document.addEventListener("click", function (event) {
    onDocumentClick(event);
});

// Function that runs with every click on the document
function onDocumentClick(event) {
    // If event.target is either the menuContent or the menu, then we don't do anything
    // Event.target is the Element that has been clicked on
    if (menuContent.contains(event.target) || menu.contains(event.target)) {
        return;
    }

    // If the if statement does not apply then this removes "active" from menuContent
    menuContent.classList.remove("active");
}


//---------------------------------------------- Projects article fold out -------------------------------------------------

// Find projects, this will contain x amount of project Elements (project-box from HTML)
let projects = document.getElementsByClassName("project-box");

// Makes it go through each project in projects
for (let project of projects) {

    // Gets the arrow element in the project it is looking in (snapshot)
    let projectArrows = project.getElementsByClassName("project-box-arrow-down");

    // Since theres only 1 arrow we know, we just have to take the first - it counts from 0 and up
    let projectArrow = projectArrows[0];

    // Adds EventListener, that listens to a "click" event on the arrow element
    projectArrow.addEventListener("click", function (event) {
        onProjectClick(project);
    });
}

// Function that runs with every click on the specified project (it waits for the "click" event)
function onProjectClick(project) {
    project.classList.toggle("active");
}


//------------------------------------------- Qualifications article fold out ----------------------------------------------

// The variable takes the class .qualification and references it in JavaScript
let qualifications = document.getElementsByClassName("qualification");


// For quali-top
for (let qualification of qualifications) {

    // Gets the arrow element in the qualification it is looking in
    let qualiTopArrows = qualification.getElementsByClassName("quali-top");

    // Because there only is 1 arrow its 0 - it always counts from 0 and up
    let qualiTopArrow = qualiTopArrows[0];

    // Adds EventListener, that listens to a "click" event on the arrow element
    qualiTopArrow.addEventListener("click", function (event) {
        onQualiClick(qualification);
    });
}


// For quali-bottom
for (let qualification of qualifications) {

    // Gets the arrow element in the qualification it is looking in
    let qualiBottomArrows = qualification.getElementsByClassName("quali-bottom");

    // Because there only is 1 arrow its 0 - it always counts from 0 and up
    let qualiBottomArrow = qualiBottomArrows[0];

    // Adds EventListener, that listens to a "click" event on the arrow element
    qualiBottomArrow.addEventListener("click", function (event) {
        onQualiClick(qualification);
    });
}

// Function that runs with every click on the specified qualification (it waits for the "click" event)
function onQualiClick(qualification) {
    // Turns on the class .active in CSS
    qualification.classList.toggle("active");
}


//-------------------------------------------- Hobbies article fold out --------------------------------------------------

// The variable takes the class .about-hobby-box and references it in JavaScript
let hobbies = document.getElementsByClassName("about-hobby-box")

// For about-box-arrow-down
for (let hobby of hobbies) {

    // Gets the arrow element in the hobby it is looking in
    let hobbyArrows = hobby.getElementsByClassName("about-box-arrow-down");

    // Because there only is 1 arrow its 0 - it always counts from 0 and up
    let hobbyArrow = hobbyArrows[0];

    // Adds EventListener, that listens to a "click" event on the arrow element
    hobbyArrow.addEventListener("click", function (event) {
        onHobbyClick(hobby);
    });
}


// Function that runs with every click on the specified hobby (it waits for the "click" event)
function onHobbyClick(hobby) {
    // Turns on the class .active in CSS
    hobby.classList.toggle("active");
}