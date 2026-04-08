
// FADE
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
faders.forEach(el => observer.observe(el));

// MENU
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");

    document.body.style.overflow =
        menu.classList.contains("active") ? "hidden" : "auto";
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    document.body.style.overflow = "auto";
}

// OUTSIDE CLICK
document.addEventListener("click", function (e) {
    const menu = document.getElementById("mobileMenu");
    const toggle = document.querySelector(".menu-toggle");

    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
    }
});



function downloadResume() {
    const link = document.createElement('a');
    link.href = './resume.pdf';   // your resume file path
    link.download = 'Chandan_Kumar_Resume.pdf'; // file name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function viewResume() {
    window.open('./resume.pdf', '_blank');
}

const roles = [
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Full Stack Developer"
];

let index = 0;

function changeRole() {
    const roleElement = document.getElementById("role");

    // remove animation to reset
    roleElement.style.animation = "none";
    void roleElement.offsetWidth; // trigger reflow
    roleElement.style.animation = "slideIn 0.5s ease";

    roleElement.innerText = roles[index];

    index = (index + 1) % roles.length;
}

// initial call
changeRole();

// loop every 2 seconds
setInterval(changeRole, 2000);