console.log("Script Loaded");
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            alert("Message sent successfully!");
            contactForm.reset();
        });
    }
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    document.querySelectorAll("img").forEach(img => {
        img.onerror = function () {
            fetch("placeholder.jpg").then(response => {
                if (response.ok) {
                    this.src = "placeholder.jpg";
                }
            }).catch(() => console.warn("Placeholder image missing."));
        };
    });

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percent");
        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = percentage;
        }, 300);
    });
});
