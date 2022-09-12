
// Посчитает и выведет в консоль количество
//  категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//  найдет и выведет в консоль текст заголовка элемента
//  (тега <h2>) и количество элементов в категории
//  (всех вложенных в него <li>).

const categoriesEL = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEL.length)


categoriesEL.forEach((element, index) => {
    const catEl = element.querySelector('h2');
    const elemEl = element.querySelectorAll('li');
    console.log('Categorie:', catEl.textContent);
    console.log('Elements:', elemEl.length)
});
