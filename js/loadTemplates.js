function loadTemplate(templateId, templatePath) {
    fetch(templatePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(templateId).innerHTML = data;
            if (templateId === 'nav-placeholder') {
                initializeNavToggle();
            }
        })
        .catch(error => console.error('Error loading template:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadTemplate('nav-placeholder', 'templates/nav.html');
    loadTemplate('footer-placeholder', 'templates/footer.html');
    loadTemplate('contactform-placeholder', 'templates/contactform.html');
});


function initializeNavToggle() {
    const navToggle = document.querySelector("#navToggle");
    const navClosedIcon = document.querySelector("#navClosed");
    const navOpenIcon = document.querySelector("#navOpen");
    const navIcon = document.querySelectorAll(".navIcon");
    const nav = document.querySelector("nav");

    navToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        navIcon.forEach((icon) => {
            icon.classList.toggle("hidden");
        });
    });

    window.addEventListener(
        "resize", () => {
            if (document.body.clientWidth > 720) {
                nav.classList.remove("open");
                navIcon.forEach((icon) => {
                    icon.classList.remove("hidden");
                });
                navOpenIcon.classList.add("hidden");
            }
        },
        { passive: false }
    );
}