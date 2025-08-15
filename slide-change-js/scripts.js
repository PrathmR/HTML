let currentSlide = 0;
            const slides = document.querySelectorAll('.sector-slide');

            function nextSlide() {
                slides[currentSlide].classList.remove('visible');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('visible');
            }