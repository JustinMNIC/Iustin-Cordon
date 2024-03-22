// height navbar (menu top)
var height_navbar = document.getElementById('navbar').offsetHeight;
document.getElementById('section_home').style.paddingTop = height_navbar +'px';

function scrollToDiv(targetId) {
  var targetDiv = document.getElementById(targetId);
  if (targetDiv) {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    event.preventDefault(); // Prevent default anchor behavior
  }
}

// animation welcome 
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = 
  ["Welcome!", "to my portfolio.", "I am a web developer.", "I can build websites,", "databases,", "programs, bots", "and much, much more!", "Check out my profile!"];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 5000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});

// animation projects section 

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle animations
function animateElements() {
  var elements = document.querySelectorAll('.project');
  elements.forEach(function(element, index) {
      if (isInViewport(element)) {
          // Add class based on index to alternate animation direction
          if (index % 2 === 0) {
              element.classList.add('left-enter');
          } else {
              element.classList.add('right-enter');
          }
      }
  });
}

// Attach event listener to window scroll event
window.addEventListener('scroll', animateElements);
// Call the function once initially to check if any elements are in view on page load
animateElements();


function filterProjects() {
  var searchInput = document.getElementById('search_input');
  var searchValue = searchInput.value.trim().toLowerCase(); // Get search value and convert to lowercase
  var projects = document.querySelectorAll('.project');

  projects.forEach(function(project) {
    if (project.id.includes(searchValue)) {
      project.classList.remove('hide'); // Remove hide class if project matches search value
    } else {
      project.classList.add('hide');
    }
  });
}

// Attach event listener to search input to trigger filtering on input change
var searchInput = document.getElementById('search_input');
searchInput.addEventListener('input', filterProjects);
