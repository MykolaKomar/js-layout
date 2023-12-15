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

// константа з данними для тегу choice
const CHOICE = [
  {
    id: 1,
    info: 'База знань',
  },
  {
    id: 2,
    info: 'Інформація',
  },
]

// створимо функцію для створення класу hoice
const createChoice = () => {
  // створимо елемент choise з тегом div та класом choice
  const choise = createElement('div', 'choice')

  // створимо елемент title з тегом h1 та класом title та текстом Коммьюніті
  const title = createElement('h1', 'title', 'Коммьюніті')
  //  додамо title до елемента choise за допомогою append()
  // append() - Це вбудована функція, яка додає дочірній елемент до
  // батьківського елемента в кінець
  choise.append(title)

  // переберемо всі елементи в CHOICE за допомогою forEach(choiceData),
  // де choiceData об'єкти з CHOICE
  CHOICE.forEach((choiceData) => {
    // створимо елемент choiceOption з тегом: div класом:
    // choice__option button choice__option--${choiceData.id} та
    // тестом: choiceData.info
    const choiceOption = createElement(
      'div',
      `choice__option button choice__option--${choiceData.id}`,
      choiceData.info,
    )
    //  додамо choiceOption до елемента choise за допомогою append()
    // append() - Це вбудована функція, яка додає дочірній елемент до
    // батьківського елемента в кінець
    choise.append(choiceOption)
  })
  // повертаємо choise
  return choise
}
// створюємо константу choise в які викликаємо функцію createChoice()
const choise = createChoice()

//  додамо choise до елемента page за допомогою append()
// append() - Це вбудована функція, яка додає дочірній елемент до
// батьківського елемента в кінець
page.append(choise)

// створимо функція  для створення тегу main
const createPost = () => {
  // створимо елемент з тегом main а класом post__list
  const postList = createElement('main', 'post__list')
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // створимо елемент з тегом imgа НЕЗНАЮ ЯК ДОДАТИ SRC!!!!!!!!!!!!!!!!!!!!!!!!!
  const postImage = createElement('img')
  //  додамо postImage до елемента postList за допомогою append()
  // append() - Це вбудована функція, яка додає дочірній елемент до
  // батьківського елемента в кінець
  postList.append(postImage)

  // створимо елемент з тегом div а класом post button
  const post = createElement('div', 'post button')

  //  додамо post до елемента postList за допомогою append()
  // append() - Це вбудована функція, яка додає дочірній елемент до
  // батьківського елемента в кінець
  postList.append(post)

  // створимо елемент з тегом div а класом post__header та текстом Що таке база знань?
  const postHeader = createElement(
    'div',
    'post__header',
    'Що таке база знань?',
  )
  // створимо елемент з тегом div а класом post__info та текстом
  const postInfo = createElement(
    'p',
    'post__info',
    'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
  )
  //  додамо postHeader та postInfo до елемента post за допомогою append()
  // append() - Це вбудована функція, яка додає дочірній елемент до
  // батьківського елемента в кінець
  post.append(postHeader, postInfo)
  // ==
  // створимо елемент з тегом div а класом post button button--guide та текстом
  const postButton = createElement(
    'div',
    'post button button--guide',
    `Перейти до ком'юніті у Телеграм`,
  )
  //  додамо postButton  до елемента  postList за допомогою append()
  // append() - Це вбудована функція, яка додає дочірній елемент до
  // батьківського елемента в кінець
  postList.append(postButton)

  // Функція поверне postList
  return postList
}

// створимо константу postList яка визве функцію createPost()
const postList = createPost()

//  додамо postList  до елемента page за допомогою append()
// append() - Це вбудована функція, яка додає дочірній елемент до
// батьківського елемента в кінець
page.append(postList)
