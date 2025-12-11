console.log("JS loaded");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);  
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hiddenrx, .hiddenyd, .hiddenlx');
hiddenElements.forEach((el) => observer.observe(el));
