console.log("Hello there, fellow hackerperson. 🕵️‍♂️🕵️‍♀️")

// Pranked, I'm not actually using jQuery.
const $ = document.querySelector.bind(document);

document.querySelectorAll('.page-anchor-offset').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        let nav_height = $('nav').offsetHeight + 5;
        e.preventDefault();
        var dest = document.querySelector(this.getAttribute('href'));
        window.scroll(0, dest.offsetTop - nav_height);
    });
});
