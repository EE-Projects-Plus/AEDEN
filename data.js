// JavaScript source code
// JavaScript code to handle loading and showing content
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const logoAnimation = document.getElementById('logo-animation');
    const mainContent = document.getElementById('main-content');
    const timerElement = document.getElementById('timer');
    let countdown = 8;

    // Function to hide the loading screen and show the main content
    function showMainContent() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }

 //Function to update the countdown timer
function updateTimer() {
    timerElement.textContent = `Page will load in ${countdown} seconds...`;
    countdown--;

    if (countdown >= 0) {
        setTimeout(updateTimer, 1000); // Update timer every second
    } else {
        showMainContent();
    }
}

    // Add an event listener to check if the logo animation ends
    logoAnimation.addEventListener('ended', showMainContent);

    // Add a timed delay of 8 seconds in case the logo animation does not trigger the automatic switch
    setTimeout(showMainContent, 8000);

    // Start the countdown timer
    updateTimer();
});

//---------------------------------------------------------------------------------------------------//

const cookieBox = document.querySelector(".cookie-popup"),
    buttons = document.querySelectorAll("button");

//adds animation as the cookie prompt appears to the screen from the right
const executeCodes = () => {
    if (document.cookie.includes("codinglab")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");
            console.log("delete show");

            //if "Accept" button has been pressed
            if (button.id == "acceptBtn") {
                //set cookies to last 1 month. 60 = 1minute, 60 = 1hour, 24 = 1day, 30 = 30days
                document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
                document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
                console.log("done");
            }
        })
    })
};

//executeCodes funstion will be called on webpage load
window.addEventListener("load", executeCodes);



// JavaScript to toggle navigation menu
function toggleMenu() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//Java script to transition content on screen by scrolling down
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
}


// JavaScript to lazy load background images
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const options = {
        threshold: 0 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgImage = entry.target.getAttribute("data-bg-image");
                entry.target.style.backgroundImage = `url('${bgImage}')`;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
