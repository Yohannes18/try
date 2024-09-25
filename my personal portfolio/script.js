// Function to detect scroll and apply fade-in effect
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
});

function scrollToElement(elementSelector, instance = 0){
    // select all elements that match the given selctor
    const elements = document.querySelectorAll(elementSelector)
    // check if there are elemnets matching the selector and if the requested instance exists
    if (elements.length > 0 && instance < elements.length) {
        // scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > 0 && instance < elements.length) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollToSectionButton = document.getElementById("scrollToSection");


scrollToSectionButton.addEventListener('click', () => {
    scrollToElement('.header', 1); 
});
