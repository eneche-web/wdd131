/* ==========================================================
   EMPIRICAL INTEGRATED SERVICE LTD
   Main JavaScript File
   ========================================================== */

"use strict";

/* ==========================================================
   ELEMENT SELECTORS
   ========================================================== */

const menuButton = document.querySelector("#menuButton");
const primaryNav = document.querySelector("#primaryNav");
const scrollTopButton = document.querySelector("#scrollTop");
const header = document.querySelector(".site-header");
const yearElement = document.querySelector("#currentYear");

/* ==========================================================
   CURRENT YEAR
   ========================================================== */

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ==========================================================
   MOBILE NAVIGATION
   ========================================================== */

if (menuButton && primaryNav) {

    menuButton.addEventListener("click", () => {

        primaryNav.classList.toggle("show");

        const expanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            !expanded
        );

        const icon = menuButton.querySelector("i");

        if (icon) {

            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");

        }

    });

}

/* ==========================================================
   CLOSE MENU WHEN A LINK IS CLICKED
   ========================================================== */

const navLinks = document.querySelectorAll("#primaryNav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (primaryNav) {

            primaryNav.classList.remove("show");

        }

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = menuButton.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        }

    });

});

/* ==========================================================
   STICKY HEADER EFFECT
   ========================================================== */

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("shadow");

    } else {

        header.classList.remove("shadow");

    }

});

/* ==========================================================
   SCROLL TO TOP BUTTON
   ========================================================== */

window.addEventListener("scroll", () => {

    if (!scrollTopButton) return;

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});

if (scrollTopButton) {

    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================================================
   SCROLL REVEAL ANIMATION
   ========================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ==========================================================
   ANIMATED COUNTERS
   ========================================================== */

const counters = document.querySelectorAll(".counter");

const animateCounter = counter => {

    const target = Number(counter.dataset.target);

    const speed = 200;

    let current = 0;

    const increment = Math.ceil(target / speed);

    const updateCounter = () => {

        current += increment;

        if (current >= target) {

            counter.textContent = target;

            return;

        }

        counter.textContent = current;

        requestAnimationFrame(updateCounter);

    };

    updateCounter();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold:0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================================
   SMOOTH SCROLLING
   ========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    });

});


/* ==========================================================
   ACTIVE NAVIGATION LINK
   ========================================================== */

const sections = document.querySelectorAll("section[id]");

const activateNav = () => {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;

        const sectionTop = section.offsetTop - 120;

        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector(
            `#primaryNav a[href="#${sectionId}"]`
        );

        if(!navLink) return;

        if(scrollY >= sectionTop &&
           scrollY < sectionTop + sectionHeight){

            navLink.classList.add("active");

        }else{

            navLink.classList.remove("active");

        }

    });

};

window.addEventListener("scroll", activateNav);


/* ==========================================================
   ACCESSIBILITY
   ========================================================== */

document.addEventListener("keyup", event => {

    if(event.key === "Escape"){

        if(primaryNav){

            primaryNav.classList.remove("show");

        }

        if(menuButton){

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = menuButton.querySelector("i");

            if(icon){

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        }

    }

});


/* ==========================================================
   PAGE LOAD
   ========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("fade-in");

});


/* ==========================================================
   PART 3 - PERFORMANCE & FINAL ENHANCEMENTS
   ========================================================== */


/* ==========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================== */

document.addEventListener("click", event => {

    if (!menuButton || !primaryNav) return;

    const clickedMenu =
        primaryNav.contains(event.target);

    const clickedButton =
        menuButton.contains(event.target);

    if (
        primaryNav.classList.contains("show") &&
        !clickedMenu &&
        !clickedButton
    ) {

        primaryNav.classList.remove("show");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon = menuButton.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    }

});


/* ==========================================================
   HEADER BACKGROUND WHILE SCROLLING
   ========================================================== */

const updateHeader = () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.backgroundColor =
            "rgba(255,255,255,.97)";

        header.style.backdropFilter =
            "blur(10px)";

    } else {

        header.style.backgroundColor =
            "#ffffff";

        header.style.backdropFilter =
            "none";

    }

};

window.addEventListener("scroll", updateHeader);


/* ==========================================================
   LAZY LOADING ENHANCEMENT
   ========================================================== */

const lazyImages =
    document.querySelectorAll("img[loading='lazy']");

if ("IntersectionObserver" in window) {

    const imageObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const image = entry.target;

                image.classList.add("fade-in");

                imageObserver.unobserve(image);

            });

        });

    lazyImages.forEach(image => {

        imageObserver.observe(image);

    });

}


/* ==========================================================
   DEBOUNCE FUNCTION
   ========================================================== */

function debounce(callback, delay = 100) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}


/* ==========================================================
   OPTIMIZED SCROLL EVENTS
   ========================================================== */

const optimizedScroll = debounce(() => {

    revealOnScroll();
    activateNav();
    updateHeader();

}, 20);

window.addEventListener("scroll", optimizedScroll);


/* ==========================================================
   SCROLL TO TOP IMPROVEMENT
   ========================================================== */

if (scrollTopButton) {

    scrollTopButton.setAttribute(
        "title",
        "Back to Top"
    );

}


/* ==========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================== */

document.addEventListener("keydown", event => {

    if (
        event.key === "Enter" &&
        document.activeElement === scrollTopButton
    ) {

        scrollTopButton.click();

    }

});


/* ==========================================================
   IMAGE ERROR FALLBACK
   ========================================================== */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.src = "images/placeholder.webp";

        image.alt = "Image unavailable";

    });

});


/* ==========================================================
   CONSOLE MESSAGE
   ========================================================== */

console.log(
    "%cEmpirical Integrated Service Ltd",
    "color:#003366;font-size:18px;font-weight:bold;"
);

console.log(
    "Website initialized successfully."
);


/* ==========================================================
   DOM READY
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    revealOnScroll();
    activateNav();
    updateHeader();

});


/* ==========================================================
   END OF FILE
   ========================================================== */

   /* ==========================================================
   CONTACT FORM VALIDATION
   ========================================================== */

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName = document.querySelector("#fullName");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const subject = document.querySelector("#subject");
        const message = document.querySelector("#message");

        let valid = true;

        formMessage.textContent = "";
        formMessage.className = "";

        clearErrors();

        if (fullName.value.trim().length < 3) {

            showError(fullName, "Please enter your full name.");

            valid = false;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            showError(email, "Please enter a valid email address.");

            valid = false;

        }

        if (subject.value.trim().length < 5) {

            showError(subject, "Subject is too short.");

            valid = false;

        }

        if (message.value.trim().length < 20) {

            showError(
                message,
                "Please enter at least 20 characters."
            );

            valid = false;

        }

        if (phone.value.trim() !== "") {

            const phonePattern =
                /^[0-9+\-()\s]{7,20}$/;

            if (!phonePattern.test(phone.value.trim())) {

                showError(phone, "Invalid phone number.");

                valid = false;

            }

        }

        if (!valid) {

            formMessage.textContent =
                "Please correct the highlighted fields.";

            formMessage.classList.add("error");

            return;

        }

        formMessage.textContent =
            "Thank you! Your message has been sent successfully.";

        formMessage.classList.remove("error");
        formMessage.classList.add("success");

        contactForm.reset();

    });

}

/* ==========================================================
   PROJECT FILTER
   ========================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active"));

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        projectCards.forEach(card => {

            const category =
                card.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ){

                card.classList.remove("hide");

                card.classList.add("show");

            }else{

                card.classList.remove("show");

                card.classList.add("hide");

            }

        });

    });

});



/* ==========================================================
   SHOW FIELD ERROR
   ========================================================== */

function showError(field, message) {

    field.style.borderColor = "#d62828";

    let error =
        field.parentElement.querySelector(".field-error");

    if (!error) {

        error = document.createElement("small");

        error.className = "field-error";

        field.parentElement.appendChild(error);

    }

    error.textContent = message;

}




function clearErrors() {

    document
        .querySelectorAll(".field-error")
        .forEach(error => error.remove());

    document
        .querySelectorAll(
            "#contactForm input, #contactForm textarea"
        )
        .forEach(field => {

            field.style.borderColor = "#dddddd";

        });

}

/* ==========================================================
   CLEAR ERRORS
   ========================================================== */