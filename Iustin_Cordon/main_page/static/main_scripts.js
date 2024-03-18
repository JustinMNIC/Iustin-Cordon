// height navbar (menu top)
var height_navbar = document.getElementById('navbar').offsetHeight;
document.getElementById('section_home').style.paddingTop = height_navbar +'px';


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