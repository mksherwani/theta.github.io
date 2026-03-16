/* --- js/main.js --- */
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    // Only run if slides exist
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 2000; 

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }
});
