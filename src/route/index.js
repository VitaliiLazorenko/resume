// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Vlad',
    lastname: 'Ivanenko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ на місяць',
  address: 'Ukraine, Bila Tserkva'
  }
 
var footer = {
  social: {
    email: {
      text: 'vlad@gmail.com',
      href: 'mailto:dmytro@gmail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

  page: {
    title: 'Resume | Summary',
  },  
  header,
  main: {
    summary: {
      title: 'Summary',
      text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
    },
    experience: {
      title:'Other experience',
      text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
    },
  },  
  footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

  page: {
    title: 'Resume | Skills',
  },  
  header, 
  main: {
    skills: [
      {
        name: 'HTML',
        point: 10,
        isTop: true,
      },
      {
        name: 'Handlebars',
        point: 10,
        isTop: true,
      },
      {
        name: 'VS Code',
        point: 9,
        isTop: false,
      },
      {
        name: 'Git',
        point: 8,
      },
      {
        name: 'Terminal',
        point: 8,
      },
      {
        name: 'NPM',
        point: 8,
      },
      {
        name: 'React.js',
        point: 0,
      },
      {
        name: 'PHP',
        point: null,
      },
      ],
      hobbies: [
      {
        name: 'sky',
        isMain: false,
      }, 
      {
        name: 'engraving',
        isMain: true,
      },
      {
        name: 'dancing',
        isMain: false,
      },
      ],
  },  
  footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

  page: {
    title: 'Resume | Education',
  },  
  header, 
  main: { 
    educations: [
      {
        name: 'MAUP',
        isEnd: true,
      },   
      {
        name: 'NAU',
        isEnd: true,
      },  
      {
        name: 'KPI',
        isEnd: false,
      },   
      ],
    certificates: [
      {
        name: 'lawyer',
        id: 1,
      },
      {
        name: 'designer',
        id: 2,
      },
      {
        name: 'artist',
        id: 0,
      },
    ],  
  },  
  footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

  layout: 'big',  

  page: {
    title: 'Resume | Work',
  },  
  header, 
  main: { 
    works: [
      {
        position: 'Junior Fullstack Developer',
        company : {
          name: 'IT-Brains',
          url: 'https://it-brains.com.ua',
        },
        duration: {
          from: '10.10.2022',
          to: null,
        },
        projectAmount: 3,

        projects: [
          {
           name: 'Resume',
           url: 'https://resume.com.ua',
           about: 'High load application',
           stacks: [
             {
              name: 'React.js',
             },
            {
              name: 'HTML / CSS',
            },
            {
              name: 'Node.js',
            },
           ],
           stackAmount: 2,
           awards: [
            {
              name: "Background verification - is a feature that provides users."
            },
            {
              name: "Preparing SEO optimized page."
            },
           ],
           awardAmount: 1,
        },
      ],
      },
    ],  
  },  
  footer,
  })
})


// Підключаємо роутер до бек-енду
module.exports = router
