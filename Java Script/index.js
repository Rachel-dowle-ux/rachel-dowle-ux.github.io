document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", theme);

  const toggleContainer = document.createElement("div");
  toggleContainer.className = "theme-toggle";
  const toggleButton = document.createElement("button");
  toggleButton.innerText = theme === "dark" ? "☀" : "☽";
  toggleButton.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggleButton.innerText = newTheme === "dark" ? "☀" : "☽";
  });
  toggleContainer.appendChild(toggleButton);
  document.body.appendChild(toggleContainer);
});

//image gallery

 // Get the modal
 var modal = document.getElementById('myModal');
        
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementsByClassName('myImg');
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 
 var showModal = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
     captionText.innerHTML = this.alt;
 }
 
 for (var i = 0; i < img.length; i++) {
     img[i].addEventListener('click', showModal);
 }
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}



// lazy load

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
