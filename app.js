// =========================================
// LOADER
// =========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.8s";

});


// =========================================
// TYPING ANIMATION
// =========================================

const typing = document.getElementById("typing");

const words = [

    "Frontend Developer",
    "UI / UX Designer",
    "JavaScript Developer",
    "Creative Coder",
    "Problem Solver"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(5,8,22,.95)";

        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.4)";

        navbar.style.top = "15px";

    }

    else {

        navbar.style.background = "rgba(255,255,255,.05)";

        navbar.style.boxShadow = "none";

        navbar.style.top = "25px";

    }

});


// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// =========================================
// CLOSE MENU
// =========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// =========================================
// ACTIVE NAV LINK
// =========================================

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 200;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(

    ".hero-left, .hero-right"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================================
// PARALLAX BACKGROUND
// =========================================

const blur1 = document.querySelector(".blur1");
const blur2 = document.querySelector(".blur2");

window.addEventListener("mousemove", (e) => {

    let x = e.clientX / 40;
    let y = e.clientY / 40;

    blur1.style.transform = `translate(${x}px,${y}px)`;

    blur2.style.transform = `translate(${-x}px,${-y}px)`;

});



// ==========================
// SKILL BAR ANIMATION
// ==========================

const skillBars = document.querySelectorAll(".progress-bar");

function animateSkills() {

    skillBars.forEach(bar => {

        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            bar.style.width = bar.dataset.width;

        }

    });

}

window.addEventListener("scroll", animateSkills);

animateSkills();




/* ========================== CURSOR GLOW ========================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/* ========================== SCROLL PROGRESS ========================== */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});


/*============================== TOP BUTTON ==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/*============================== CONTACT FORM ==============================*/

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thanks! Your message has been sent.");

    form.reset();

});




/*============================== THEME TOGGLE ==============================*/

const themeBtn = document.getElementById("themeToggle");

const body = document.body;

const icon = themeBtn.querySelector("i");

// Load Saved Theme

if (localStorage.getItem("theme") === "light") {

    body.classList.add("light");

    icon.className = "fa-solid fa-sun";

}

// Toggle

themeBtn.onclick = () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        icon.className = "fa-solid fa-sun";

        localStorage.setItem("theme", "light");

    } else {

        icon.className = "fa-solid fa-moon";

        localStorage.setItem("theme", "dark");

    }

};