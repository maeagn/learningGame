// Get the button that opens the chapter
var btn = document.querySelectorAll("button.chapterBtn");

// All page chapters
var chapters = document.querySelectorAll('.chapter');

// Get the <span> element that closes the chapter
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the chapter
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    chapter = document.querySelector(e.target.getAttribute("href"));
    chapter.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the chapter
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in chapters) {
      if (typeof chapters[index].style !== 'undefined') chapters[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the chapter, close it
window.onclick = function(event) {
    if (event.target.classList.contains('chapter')) {
     for (var index in chapters) {
      if (typeof chapters[index].style !== 'undefined') chapters[index].style.display = "none";    
     }
    }
}