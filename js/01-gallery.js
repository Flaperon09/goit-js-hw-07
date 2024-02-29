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
                data-source=${element.original}
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

    // Ссылка на большую картинку из data-set
    const selectedImageLink = event.target.dataset.source;

    // Аттрибут картинки Alt
    const selectedImageAlt = event.target.alt;

    // Код модального окна для большой картинки
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${selectedImageLink}" alt="${selectedImageAlt}"/>
    </div>
    `,
        {
        // Закрытие модального окна по клавише Escape
        onShow: (instance) => {
            // Добавление слушателя перед открытием модального окна
            document.addEventListener("keydown", event => {
                if (event.key === "Escape") {
                    instance.close();
                };
            });
        },

        onClose: (instance) => {
            // Удаление слушателя перед закрытием модального окна
            document.removeEventListener("keydown", event => {
                if(event.key === "Escape") {
                    instance.close();
                };
            });
        }
    })
    instance.show()   
};
// *** Обработчик клика по картинке - конец

console.log(galleryItems);