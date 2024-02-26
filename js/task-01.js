const listWithItems = document.querySelectorAll('.item');
console.log('Number of categories:', listWithItems.length);

console.log(''); // Пустая строка для раздела абзацев


listWithItems.forEach(element => {
    const category = element.querySelector('li > h2');
    console.log('Category:', category.textContent); // Содержимое заголовка h2

    const numberOfElements = element.querySelector('li > ul');
    console.log('Elements:', numberOfElements.children.length); // Количество пунктов в меню

    console.log(''); // Пустая строка для раздела абзацев
});
