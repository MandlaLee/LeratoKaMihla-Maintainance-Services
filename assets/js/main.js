/* ==========================================
LERATO KA MIHLA
MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeMobileMenu();
    initializeSmoothScroll();
    initializeHeaderEffects();
    initializeRevealAnimations();
    initializeContactForm();
    initializeStatCounters();

});

/* ==========================================
MOBILE MENU
========================================== */

function initializeMobileMenu() {

    const toggle =
        document.getElementById("mobileToggle");

    const menu =
        document.getElementById("mobileMenu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

    const links =
        menu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}

/* ==========================================
SMOOTH SCROLL
========================================== */

function initializeSmoothScroll() {

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#")
                return;

            const target =
                document.querySelector(targetId);

            if (!target)
                return;

            e.preventDefault();

            window.scrollTo({

                top:
                    target.offsetTop - 100,

                behavior:
                    "smooth"

            });

        });

    });

}

/* ==========================================
HEADER EFFECTS
========================================== */

function initializeHeaderEffects() {

    const header =
        document.querySelector(".header");

    if (!header)
        return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow =
                "0 5px 15px rgba(0,0,0,.08)";

        }

    });

}

/* ==========================================
SCROLL ANIMATIONS
========================================== */

function initializeRevealAnimations() {

    const revealElements = document.querySelectorAll(

        ".service-card, \
         .service-box, \
         .gallery-card, \
         .why-card, \
         .feature-item, \
         .mission-card, \
         .contact-card, \
         .stat-box"

    );

    if (!revealElements.length)
        return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "fade-up"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(item => {

        item.style.opacity = "0";

        observer.observe(item);

    });

}

/* ==========================================
CONTACT FORM
========================================== */

function initializeContactForm() {

    const form =
        document.querySelector(
            ".contact-form"
        );

    if (!form)
        return;

    form.addEventListener(
        "submit",
        function(e) {

            const name =
                form.querySelector(
                    'input[name="name"]'
                );

            const phone =
                form.querySelector(
                    'input[name="phone"]'
                );

            const email =
                form.querySelector(
                    'input[name="email"]'
                );

            const message =
                form.querySelector(
                    'textarea[name="message"]'
                );

            if (
                !name.value.trim() ||
                !phone.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()
            ) {

                e.preventDefault();

                alert(
                    "Please complete all required fields."
                );

                return;
            }

            if (
                !validateEmail(
                    email.value
                )
            ) {

                e.preventDefault();

                alert(
                    "Please enter a valid email address."
                );

                return;
            }

        }
    );

}

/* ==========================================
EMAIL VALIDATION
========================================== */

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}

/* ==========================================
COUNTER ANIMATION
========================================== */

function initializeStatCounters() {

    const counters =
        document.querySelectorAll(
            ".stat-box h2"
        );

    if (!counters.length)
        return;

    counters.forEach(counter => {

        const text =
            counter.innerText;

        const numeric =
            parseInt(
                text.replace(/\D/g, "")
            );

        if (
            isNaN(numeric)
        )
            return;

        counter.innerText = "0";

        let current = 0;

        const increment =
            Math.ceil(
                numeric / 40
            );

        const observer =
            new IntersectionObserver(

                entries => {

                    if (
                        entries[0]
                            .isIntersecting
                    ) {

                        const interval =
                            setInterval(() => {

                                current += increment;

                                if (
                                    current >=
                                    numeric
                                ) {

                                    current =
                                        numeric;

                                    clearInterval(
                                        interval
                                    );
                                }

                                if (
                                    text.includes(
                                        "%"
                                    )
                                ) {

                                    counter.innerText =
                                        current +
                                        "%";

                                }

                                else if (
                                    text.includes(
                                        "24"
                                    )
                                ) {

                                    counter.innerText =
                                        current +
                                        "/7";

                                }

                                else {

                                    counter.innerText =
                                        current;

                                }

                            }, 25);

                        observer.disconnect();

                    }

                }

            );

        observer.observe(
            counter
        );

    });

}

/* ==========================================
ACTIVE NAVIGATION
========================================== */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );

navLinks.forEach(link => {

    const href =
        link.getAttribute("href");

    if (
        href === currentPage
    ) {

        link.classList.add(
            "active"
        );

    }

});

/* ==========================================
PROJECT IMAGE HOVER
========================================== */

const galleryCards =
    document.querySelectorAll(
        ".gallery-card"
    );

galleryCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0px)";

        }
    );

});

/* ==========================================
BACK TO TOP SUPPORT
========================================== */

window.addEventListener(
    "scroll",
    () => {

        const button =
            document.getElementById(
                "backToTop"
            );

        if (!button)
            return;

        if (
            window.scrollY > 500
        ) {

            button.classList.add(
                "show"
            );

        } else {

            button.classList.remove(
                "show"
            );

        }

    }
);

/* ==========================================
BACK TO TOP CLICK
========================================== */

const backButton =
    document.getElementById(
        "backToTop"
    );

if (backButton) {

    backButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        }
    );

}

/* ==========================================
END OF FILE
========================================== */
