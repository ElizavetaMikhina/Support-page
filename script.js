document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.support__button');
    const links = document.querySelectorAll('.support__social-link a');

    buttons.forEach(button => {
        button.disabled = true;
    });

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
        });
    });
});

const nextButton = document.querySelector('.next-button');
const carouselList = document.querySelector('.support__faq-list');

let currentPosition = 0;
const itemWidth = 306;

nextButton.addEventListener('click', () => {
    const firstItem = carouselList.children[0];
    firstItem.style.opacity = '0';
    carouselList.appendChild(firstItem);

    setTimeout(() => {
        firstItem.style.transition = 'opacity 1s ';
        firstItem.style.opacity = '1';
    }, 100);
});