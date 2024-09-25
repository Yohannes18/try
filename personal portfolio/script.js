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