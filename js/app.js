/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
// Defining an unordered list variable by ID
const myUl = document.getElementById('navbar__list');
// Defining a variable that comes with a sections as an array
const sections = document.querySelectorAll('section');
// Define a variable that creates a fragment from the page for performance
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 */

// Define the function for creating a NavMenu
function buildNav() {
    // Create a loop to fetch every section through forEach
    sections.forEach(section => {
        // Create Element li And give coordination menu__link
        let newLi = document.createElement('li');
        newLi.className = ('menu__link');
        // Create Element link a
        let newlink = document.createElement('a');
        // Fetch text in data-nav for a section And define it in a variable name is text
        let text = section.getAttribute('data-nav');
        // Create text node that is the same as in the data-nav
        let textNode = document.createTextNode(text);
        // Create a listener event when clicking on the link creates a scroll to its own section
        newlink.addEventListener('click', function() {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        // appending the textNode inside the newlink
        newlink.appendChild(textNode);
        // appending the newlink inside the newLi
        newLi.appendChild(newlink);
        // appending the newLi inside the fragment 
        fragment.appendChild(newLi);
    });
    // Outside the Loop appending the fragment inside the myUl 
    myUl.appendChild(fragment);
}



// It should be clear which section is being viewed while scrolling through the page
function scrollSections() {
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect()
            if (rect.top >= 0 && rect.bottom < window.innerHeight) {
                let sections = document.querySelectorAll('section');
                // Add class 'active' to section when near top of viewport
                sections.forEach((section) => {
                    section.classList.remove("your-active-class");
                });
                section.classList.add("your-active-class");

                const allLinks = document.querySelectorAll('a');
                allLinks.forEach((alink) => {
                    if (section.getAttribute('data-nav') == alink.textContent) {
                        let allLinks = document.querySelectorAll('a');
                        allLinks.forEach((alink) => {
                            alink.classList.remove('highLight');
                        });
                        alink.classList.add('highLight');
                    }
                });
            }
        })
    });
}


// highlight functionality
function highLight() {
    let links = document.querySelectorAll('a');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            links.forEach((link) => {
                link.classList.remove('highLight');
            })
            link.classList.add('highLight');
        })
    })
}

// Build menu 
buildNav();
// Scroll to section on link click
scrollSections();
// Set sections as active
highLight();

// Add a scroll to top button on the page
const myTop = document.getElementById('up');
window.onscroll = function() {
    if (window.pageYOffset >= 500) {
        myTop.style.display = 'block';
    } else {
        myTop.style.display = 'none';
    }
};
myTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});