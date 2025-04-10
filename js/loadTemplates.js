

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
    loadTemplate('nav-placeholder', '../templates/nav.html');
    loadTemplate('footer-placeholder', '../templates/footer.html');
    loadTemplate('contactform-placeholder', '../templates/contactform.html');
    loadTemplate('contactAnimation-placeholder', '../templates/contactAnimation.html');
});

function openService(evt, serviceName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add the active class to the clicked tab link
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to be open
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click();
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