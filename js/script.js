// SideNav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider
const Slider = document.querySelectorAll('.slider');
M.Slider.init(Slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});

// clients
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// material boxed
const materialBoxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBoxed);

// scrollspy
const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy,{
    scrollOffset: 50
});


const dropDown = document.querySelectorAll(".dropdown-trigger");
M.Dropdown.init(dropDown);
        