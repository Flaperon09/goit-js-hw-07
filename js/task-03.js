const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];

const listImg = document.querySelector('.gallery');

const arrayOfTags = []; // Массив тегов

// Заполняем массив тегов по массиву атрибутов images
images.forEach(element => {
  arrayOfTags.push(`<li><img src=${element.url} alt="${element.alt}"></li>`);
});

const arrayOfJoinTags = arrayOfTags.join(" "); // Удаляем запятые из массива тегов

listImg.insertAdjacentHTML("beforeend", arrayOfJoinTags); // Добавляем теги в разметку