document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    toggler.addEventListener("click", function () {
        this.classList.toggle("open");
    });

    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        toggler.classList.remove("open");
    });

    navbarCollapse.addEventListener("shown.bs.collapse", function () {
        toggler.classList.add("open");
    });
});

// close nav-bar on nav-link click and close navbar on outside click
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    // Close navbar when a nav-link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: true});
                bsCollapse.hide();
            }
        });
    });

    // Close navbar when clicking outside of it
    document.addEventListener('click', function (event) {
        if (
            navbarCollapse.classList.contains('show') &&
            !navbarCollapse.contains(event.target) &&
            !navbarToggler.contains(event.target)
        ) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: true});
            bsCollapse.hide();
        }
    });
});

$('#portfolio-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 24,
    nav: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// REVIEWS
$('#reviews-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 24,
    nav: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
