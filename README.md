# Landing Page Project
# What was done on the project
# Functions and codes used



=> Landing Page Project
The project consists of 4 files, where there is the index.html file, which is the file for the HTML code.
And Folder CSS inside it the file styles.CSS for your CSS code and page formats.
As well as the is folder inside the app.js file for javascript Code .
And readme file for description of project .

=> What was done on the project :
1- the page title has been changed from manipulations the dom to my first project .
2- the main heading of the page has been changed from landing page to my landing page project .
3- add a fourth section and add its data , such as : id, data-nav, h2 .
4- add scroll to top button .
5- add a sentence to the property rights It contains the name of the project executor in footer .
6- add the link code for the external javascript file .
7- change the color of the backgrounds of the active class .
8- add special color navbar menu formats .
9- modified the navbar menu formats .
10- change the background colors of the footer .
11- scroll to top button formats .
12- defining an unordered list variable by id .
13- defining a variable that comes with a sections as an array .
14- Query the all sections and store the list in variable . 
15- define the function for creating a navmenu .
16- create a loop to fetch every section through Use forEach on the list Variable .
17- Create (li and a and textNode ) for each section in the list .
18- Extract the data-nav value from the section and store it in variable .
19- add this variable which contains the text to the link as data-nav value .
20- create a listener event when clicking on the link create a scroll to its own section .
21- Add EventListener to the links and use scrollIntoView .
22- appending the textNode inside the newlink . 
23- appending the newlink inside the newLi .
24- appending the newLi inside the fragment .
25- For Better performance use appendChild on the Fragment inside the loop .
26- After the loop end append that Fragment to the ul .
27- Get the active Section , Use forEach method on the sections list inside it .
28- Use the getBoundingClientRect on the element parameter .
29- IT will return some properties related to viewport and the section .
30- Use if statement to get the Active like .
31- Inside the if statement before add active class to the section .
32- remove the other active classes from all sections .
33- Use classList.add method to add the active class to the active section .
34- Each link should contains the data-nav attribute value for the section which linked to it as an link id or textContent .
35- When we got the Active section we can Query The active section and get the data-nav value for this active section .
36- Then we can use forEach on all the links and check using if condition which link has the textContent equal to active section data-nav .
37- Remove Active class from all links, give the active link class active .
38- highlight functionlity .
39- Execution of functions .
40- add a scroll to top button on the page .

=> Functions and codes used :
1- <title></title>
2- <h1></h1>
3- <section></section>
4- <button></button>
5- <footer></footer>
6- <script src=""></script>
7- .navbar__menu .menu__link
8- .navbar__menu .menu__link:hover
9- .page__footer
10- section.your-active-class
11- .highLight
12- #up 
13- const
14- document.getElementById('');
15- document.querySelectorAll('');
16- document.createDocumentFragment();
17- function name() { }
18- forEach(() => { });
19- document.createElement('');
20- element.className = ('');
21- element.getAttribute('');
22- document.createTextNode();
23- .addEventListener('click', function() {})
24- .scrollIntoView({ behavior: 'smooth', block: 'start' });
25- .appendChild();
26- .getBoundingClientRect()
27- .classList.remove("");
28- .classList.add("");
29- window.onscroll = function() {}
30- if () { } else { }
31- window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });



