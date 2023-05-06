//Navbar and sidebar
const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

// toggle sidebar open and close
menuBtn.forEach(btn => {
    btn.addEventListener('click', sideNavToggle)
});

function sideNavToggle() {
    // delay animation
    let delay = 100
    // toggle class open
    menu.classList.toggle('menu-open')

    // sidenav link slide aniamations
    setTimeout(() => {
        // reset animations after all of them end
        resetAnimations();
    }, delay * (links.length + 1));

    // add animation to links 
    links.forEach(link => {
        // opactiy
        link.style.opacity = "0"
        // animation
        link.style.animation = "slideIn 400ms ease-in-out forwards"
        // delay
        link.style.animationDelay = delay + "ms"
        // increase delay for each link
        delay += 100;
    })

    //reset animation so they can be activated again
    function resetAnimations() {
        // select all links
        links.forEach(link => {
          // remove animations
        link.style.animation = "none";
          // set opacity back to default
        link.style.opacity = "1";
        });
    }
}

// slider
const cntrl = document.querySelectorAll('.slider-cntrl')
const cntrlMob = document.querySelectorAll('.pagination-mobile > li')
const title = document.querySelector('.title')
const subTitle = document.querySelectorAll('.sub-title')
const img = document.querySelector('.thumbnail')
const count = document.querySelector('.slider-count')
const progress = document.querySelector('.progress div')

let id = 0;

// data
// array with image path for the slider 
const images = [
    'https://i.ibb.co/b5TqCTN/img2.jpg',
    'https://i.ibb.co/KzfLk9J/img3.jpg',
    'https://i.ibb.co/GkXpWvp/img1.jpg',
]

// origress width for the sldier 
const progressWidth = [
    '33%',
    '66%',
    '100%',
]


// text variations for the slider 
const text = [
    'Work',
    'Active',
    'Travel'
]

// pagination controls 
for (let i = 0; i < cntrl.length; i++) {
    // add click event for all pagination
    cntrl[i].addEventListener('click', () => {
        // run slider function
        slider(i)
        // set id to clicked pagination index
        id = i 
        // stop auto slide
        stopAutoSlide()
    })
    // add click event for all pagination on mobile
    cntrlMob[i].addEventListener('click', () => {
        // run slider function
        slider(i)
        // set id to clicked pagination index
        id = i
        // stop auto slide
        stopAutoSlide()
    })
}

function slider(i) {
    // change thumbnail image
    img.src = images[i]
    // progress
    progress.style.width = progressWidth[i]
    // change title
    title.innerHTML = text[i] + " Collection"
    // change subtitle
    subTitle.forEach(sub => {
        sub.innerText = text[i] + " Collection"
    })
    // change slide number
    count.innerText = "/0" + (i + 1);
    // remove active class from all
    for (let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove('active')
        cntrlMob[i].classList.remove('pag-active')
    }
    // reset active class to clicked element
    cntrl[i].classList.add('active')
    cntrlMob[i].classList.add('pag-active')
}

// slider automation
function nextSlide() {
    // increment img id
    id++
    // check if id is greater than number of available slides
    if (id > cntrl.length - 1) {
        id = 0
    }
    // run slider 
    slider(id)
}

// automate slider 
let autoSlide = setInterval(nextSlide, 10000)

// stop auto slide
function stopAutoSlide() {
    clearInterval(autoSlide)

    // restart auto slider
    autoSlide = setInterval(nextSlide, 10000)
}