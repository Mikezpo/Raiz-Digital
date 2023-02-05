const toggleButton = document.getElementsByClassName('navButton')[0];
const navbarLinks = document.getElementsByClassName('navLinks')[0];

// Add click event listener to each menu item
const menuItems = document.querySelectorAll('.menu-list a');
for (const item of menuItems) {
  item.addEventListener('click', () => {
    // Close the menu when an item is clicked
    navbarLinks.classList.remove('active');
    toggle.checked = false;
  });
}

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Pop-up windows

function showPopUp(id) {
    document.getElementById("popUpText").innerHTML = document.getElementById("text" + id).innerHTML;
    document.getElementById("popUp").style.display = "block";
    document.getElementById("popUp").scrollTop = 0;
}
  
function closePopUp() {
    document.getElementById("popUp").style.display = "none";
}
  
document.getElementById("popUp").addEventListener("click", function(event) {
    if (event.target === this) {
      closePopUp();
    }else if(!event.target.closest("#popUp")) {
        closePopUp();
    }
});

// LINKS SCROLL

(function(window, document, undefined) {
    let spaceinterval = 1;
    let timeinterval = 20; // speed
    let max;
    let firstrun = true;
    let isPaused = false;
    // Interval function:
    let gallery = function() {
        let elem = document.getElementById("imagesContainer");
        if (elem) {
            if (firstrun) {
                max = elem.scrollWidth;
                while (elem.scrollWidth < max * 2) {
                    let length = elem.children.length;
                    for (var i = 0; i < length; ++i) {
                        elem.appendChild(elem.children[i].cloneNode(true));
                    }
                    break;
                }
                firstrun = false;
            }
            if (!isPaused) {
                if (elem.scrollLeft >= max) {
                    elem.scrollLeft -= max;
                } else {
                    elem.scrollLeft += spaceinterval;
                }
            }
        }
    };
      let elem = document.getElementById("imagesContainer");
    elem.addEventListener("mouseover", function() {
        isPaused = true;
    });
    elem.addEventListener("mouseout", function() {
        isPaused = false;
    });
    window.setInterval(gallery, timeinterval);
})
(window, document);
    
// slide
    
const slider = document.getElementById("imagesContainer");
let mouseDown = false;
let startX, scrollLeft;
    
let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
    mouseDown = false;
};
    
slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});
    
// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
