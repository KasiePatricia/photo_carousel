const flow = document.querySelector('.carousel__flow');
const slides = Array.from(flow.children);
const prevButton = document.querySelector('.carousel__button--left');
const nextButton = document.querySelector('.carousel__button--right');
const footer = document.querySelector('.carousel__footer')
const dots = Array.from(footer.children);

//arrange the slides next to one another

//set slide posistion
const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});


const moveToSlide = (flow, currentSlide, targetSlide) => {
    flow.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

//when I click right, move to the right
prevButton.addEventListener('click', e => {
    const currentSlide = flow.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = footer.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;


    moveToSlide(flow, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

//when I click left, move to the left
nextButton.addEventListener('click', e => {
    const currentSlide = flow.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = footer.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(flow, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})

//When the next icon on the last image is clicked, it should show the first image.
footer.addEventListener('click', e => {
    //what was clicked on
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = flow.querySelector('.current-slide');
    const currentDot = footer.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(flow, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});
//When the previous icon on the first image is clicked, it should show the last image. 