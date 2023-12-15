// прийняття (import) елементів з файлу '../../script/layout'
import {
  // створення елементів
  createElement,
  // створення шапки
  createHeader,
} from '../../script/layout'

// отримуємо в константу page через document.querySelector() div з класом page
// querySelector() -Це вбудована функція, яка шукає елементи в документі,
// що відповідають певному CSS-селектору.
const page = document.querySelector('.page')

// отримуємо header через функцію createHeader()
const header = createHeader()

// додаємо header до константи page через append()
// append() - Це вбудована функція, яка додає дочірній елемент до
// батьківського елемента в кінець
page.append(header)

// створення елементу title через імпортовану функцію createElement()
const title = createElement('h1', 'title', 'Мій блог')
// додаємо title до константи page через append()
// append() - Це вбудована функція, яка додає дочірній елемент до
// батьківського елемента в кінець
page.append(title)

// конфігураційна констанда з данними для заповнення тегів
const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },
  {
    category: [{ text: 'Нова', id: 2 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '24.01',
    viewed: true,
  },
]

// створюємо
const createPost = () => {
  // створюємо елемент postList з тегом main та класом post__list
  const postList = createElement('main', 'post__list')

  // за допомогою forEach() перебираю кожен аргумент в POST_LIST
  // postData це один об'єк яки приходить з POST_LIST
  POST_LIST.forEach((postData) => {
    // створюємо елемент post з тегом div
    // та класом post button post--viewed якщо  viewed = true
    // або класом post button якщо  viewed = false
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )
    // створюю елемент postHeader з тегом div та класом post__header
    const postHeader = createElement('div', 'post__header')

    // створюю елемент categoryList з тегом div та класом post__category-list
    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    // за допомогою forEach() перебираю в кожному аргументі в POST_LIST кожну категорію category

    postData.category.forEach(
      // category це один об'єк яки приходить з postData.category елементу POST_LIST
      (category) => {
        // створюю елемент categorySpan з тегом span та відповідним класом post__category post__category--${category.id}
        // де ${category.id} отрмується з ітерації forEach
        // та отримуємо текст category.text
        const categorySpan = createElement(
          'span',
          `post__category post__category--${category.id}`,
          category.text,
        )

        // додаємо categorySpan до константи categoryList через append()
        // append() - Це вбудована функція, яка додає дочірній елемент до
        // батьківського елемента в кінець
        categoryList.append(categorySpan)
      },
    )

    // ствоюю елемент dateSpan з тегом: span, класом: post__date, та текстом: postData.date
    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    // додаємо categoryList та dateSpan до константи postHeader через append()
    // append() - Це вбудована функція, яка додає дочірній елемент до
    // батьківського елемента в кінець
    postHeader.append(categoryList, dateSpan)

    // ствоюю елемент infoParagraph з тегом: p, класом: post__info, та текстом: postData.info
    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )

    // додаємо postHeader та infoParagraph до константи post через append()
    // append() - Це вбудована функція, яка додає дочірній елемент до
    // батьківського елемента в кінець
    post.append(postHeader, infoParagraph)

    // додаємо post до константи postList через append()
    // append() - Це вбудована функція, яка додає дочірній елемент до
    // батьківського елемента в кінець
    postList.append(post)
  })

  // повертаємо postList
  return postList
}

// створюємо константу post яка визиває функцію createPost()
const post = createPost()

// додаємо post до константи page через append()
// append() - Це вбудована функція, яка додає дочірній елемент до
// батьківського елемента в кінец
page.append(post)
