import { galleryItems } from './gallery-items.js';
// Change code below this line

// *** Добавление разметки картинок в HTML - начало
// Родительский элемент списка картинок
const listImages = document.querySelector('.gallery');

// Массив картинок
let arrayImages = []; 

// Заполнение массива разметкой картинок
galleryItems.forEach(element => {
    arrayImages.push(
        `<li class="gallery__item">
            <a class="gallery__link" href=${element.original}>
                <img
                class="gallery__image"
                src=${element.preview}
                alt="${element.description}"
                />
            </a>
        </li>`)
});

// Удаляем запятые из массива тегов
const arrayOfJoinTags = arrayImages.join(" "); 

// Добавляем теги в разметку
listImages.insertAdjacentHTML("beforeend", arrayOfJoinTags); 
// *** Добавление разметки картинок в HTML - конец


// Слушатель клика по картинке
listImages.addEventListener('click', hendleClick); 

// *** Обработчик клика по картинке - начало
function hendleClick(event) {
    // Блокирование действий по умолчанию
    event.preventDefault(); 

    // Блокирование действий при клике не по картинке
    if (event.target.nodeName !== "IMG") {
        return;
    }

    // Код модального окна для большой картинки
    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        captionClass: "",
    });
};
// *** Обработчик клика по картинке - конец

console.log(galleryItems);