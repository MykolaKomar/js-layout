// Створення та експорт елементу: tag - теги в HTTML документу, className - класи в HTTML документі, text - текст в HTTML документі
export const createElement = (tag, className, text) => {
  // створення тегу
  const elem = document.createElement(tag)
  // Якщо в тегу є клас записуємо клас
  if (className) {
    elem.className = className
  }
  // Якщо в тегу є текст записуємо текст в innerHTML
  if (text) {
    elem.innerHTML = text
  }
  // повертаємо element з усы заданими тегами, класами, текстом
  return elem
}
// константа з данними (атрибутами) кнопок
const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/header__avatar.png',
  },
]
// Створення та експорт шапки з заголовком та аватаром
export const createHeader = () => {
  // створення елемету з тегом 'header',та класом 'header'
  const header = createElement('header', 'header')

  // чреез forEach() проходжусь по кожній кнопці з HEADER_BUTTON_LIST
  // в params приходять атрибути з HEADER_BUTTON_LIST
  HEADER_BUTTON_LIST.forEach((params) => {
    // створення елемету кнопки з тегом button,та класом button
    const button = createElement('button', 'button')
    // створення елемету аватарки з тегом img
    const img = createElement('img')

    // Через Object.entries() створюю масив який має в середині список масивів
    // з key, value
    // Object.entries() -- Це вбудована функція яка повертає масив з масивами,
    // які містять пари ключ-значення для кожної перерахованої
    // властивості об'єкта. Порядок властивостей у масиві
    // відповідає порядку перебору
    Object.entries(params).forEach(([key, value]) => {
      // через тег img звертаюсь до key (назви атрибута) задаю потрыбне значення
      img[key] = value
    })
    // insertAdjacentElement(position, element) - Це вбудована функція, яка використовується для вставки
    // елементу до DOM-структури вказаного елемента.
    button.insertAdjacentElement('beforeend', img)
    // або
    // button.append(img)
    // append() - Це вбудована функція, яка додає дочірній елемент до
    // батьківського елемента в кінець

    // insertAdjacentElement(position, element) - Це вбудована функція, яка використовується для вставки
    // елементу до DOM-структури вказаного елемента.
    header.insertAdjacentElement('beforeend', button)
    // або
    // header.append(button)
    // append() - Це вбудована функція, яка додає дочірній елемент до
    // батьківського елемента в кінець
  })

  return header
}
