const elementsToObserve = document.querySelectorAll('.right, .left');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        });
    },
    {
        threshold: 0.60, // Adjust as needed
    }
);

elementsToObserve.forEach(element => observer.observe(element));