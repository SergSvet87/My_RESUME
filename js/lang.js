const translateArr = {
  "head-title": {
    "ua": "Моє Резюме",
    "en": "My Resume",
    "ru": "Моё Резюме",
  },
  "about-name": {
    "ua": "Сергій Світличний",
    "en": "Serhii Svitlychnyi",
    "ru": "Сергей Светличный",
  },
  "about-description": {
    "ua": "Вмію продуктивно працювати в команді, відповідальний, уважний, швидко приймаю рішення, вмію самоорганізуватися, компетентний, врівноважений, цілеспрямований, дисциплінований, націлений на результат, комунікабельний.",
    "en": "I am able to work productively in a team, responsible, attentive, I make decisions quickly, the ability to self-organize, competent, balanced, focused, disciplined, result-oriented, sociable.",
    "ru": "Умею продуктивно работать в команде, ответственный, внимательный, быстро принимаю решения, способность к самоорганизации, грамотный, уравновешенный, целеустремленный, дисциплинированный, ориентирован на результат, коммуникабельный.",
  },
  "title-projects": {
    "ua": "Мої останні Проєкти:",
    "en": "My recent Projeсts:",
    "ru": "Мои последние Проекты:",
  },
  "card-title1": {
    "ua": "Інтернет - магазин",
    "en": "Інтернет - магазин",
    "ru": "Интернет - магазин",
  },
  "card-text1": {
    "ua": "Інтеренет-магазин з продажу екстремальної техніки та запчастин до неї по всій Україні. Відчуй спражній захват від екстримального відпочинку.",
    "en": "Internet store selling extreme equipment and spare parts for it throughout Ukraine. Feel the thirst for extreme recreation.",
    "ru": "Интернет-магазин по продаже экстремальной техники и запчастей к ней по всей Украине. Испытай настоящий восторг от экстремального отдыха.",
  },
  "card-title2": {
    "ua": "Інтернет - магазин",
    "en": "Internet - shop",
    "ru": "Интернет - магазин",
  },
  "card-text2": {
    "ua": "Інтернет-магазин з продажу запасних частин та товарів для покращення  дизайну і характеристик вашого чотири- або двоколесного товариша та друга.",
    "en": "Online store selling spare parts and products to improve the design and performance of your four- or two-wheeled companion and friend.",
    "ru": "Интернет-магазин по продаже запасных частей и товаров для улучшения дизайна и характеристик вашего четырех- или двухколесного товарища и друга.",
  },
  "card-button-text1": {
    "ua": "Код",
    "en": "Code",
    "ru": "Код",
  },
  "card-button-text2": {
    "ua": "Демо",
    "en": "Demo",
    "ru": "Демо",
  },
  "card-button-text3": {
    "ua": "Код",
    "en": "Code",
    "ru": "Код",
  },
  "card-button-text4": {
    "ua": "Демо",
    "en": "Demo",
    "ru": "Демо",
  },
  "link-projects": {
    "ua": "Моє Портфоліо ...",
    "en": "My Portfolio ...",
    "ru": "Моё Портфолио ...",
  },
  "title-work": {
    "ua": "Досвід роботи:",
    "en": "Work experience:",
    "ru": "Опыт работы:",
  },
  "work-position1": {
    "ua": "Провідний інженер-технолог",
    "en": "Leading engineer-technologist",
    "ru": "Ведущий инженер-технолог",
  },
  "organization1": {
    "ua": "Філія УкрНДІгаз АТ &quot;Укргазвидобування&quot;",
    "en": "UkrNIIgaz branch of JSC &quot;Ukrgazdobycha&quot;",
    "ru": "Филиал УкрНИИгаз АО &quot;Укргаздобыча&quot;",
  },
  "work-period1": {
    "ua": "Грудень 2017р. – по теперішній час <span class=&quot;line&quot;> | </span> Харків",
    "en": "December 2017 - up to now <span class=&quot;line&quot;> | </span> Kharkiv",
    "ru": "Декабрь 2017г.-по настоящее время <span class=&quot;line&quot;> | </span> Харьков",
  },
  "work-description1": {
    "ua": "У секторі розробки норм на механічне буріння та норм часу на технологічні роботи відділу техніки та технології буріння займаюся розробкою норм часу на спуско-підйомні операції установками для капітального ремонту свердловин.",
    "en": "In the sector of developing standards for mechanical drilling and time standards for technological work of the drilling equipment and technology department, I am developing time standards for tripping operations with installations for well workover.",
    "ru": "В секторе разработки норм на механическое бурение и норм времени на технологические работы отдела техники и технологии бурения занимаюсь разработкой норм времени на спуско-подъемные операции установками для капитального ремонта скважин.",
  },
  "work-position2": {
    "ua": "Інженер-винахідник",
    "en": "Engineer-inventor",
    "ru": "Инженер-изобретатель",
  },
  "organization2": {
    "ua": "ДП &quot;Харківське конструкторське бюро з машинобудування ім. Морозова&quot;",
    "en": "SE &quot;Kharkiv Design Bureau for Mechanical Engineering named after Morozova&quot;",
    "ru": "ГП &quot;Харьковское конструкторское бюро по машиностроению им. Морозова&quot;",
  },
  "work-period2": {
    "ua": "2016 - 2017 роки <span class=&quot;line&quot;> | </span> Харків",
    "en": "2016 - 2017 years <span class=&quot;line&quot;> | </span> Kharkiv",
    "ru": "2016 - 2017 года <span class=&quot;line&quot;> | </span> Харьков",
  },
  "work-description2": {
    "ua": "Під час роботи займався проведенням випробувань комплектуючих (тарування пилу для випробування очищувачів повітря, випробування редукторів приводу насосів водометів та лебідки), технічний супровід відновлення камери холоду, супровід технічного опису для випробувань моноблоку, розробка та оформлення &quot;Програми випробувань водяної помпи&quot;.",
    "en": "During his work, I was involved in testing components (calibration of dust for testing air cleaners, testing gearboxes for driving pumps of water jets and a winch), technical support for the restoration of the cold chamber, maintenance of a technical description for testing a monoblock, development and execution of a &quot;Water pump test program&quot;.",
    "ru": "Во время работы занимался проведением испытаний комплектующих (тарировка пыли для испытания воздухоочистителей, испытания редукторов привода насосов водометов и лебедки), техническое сопровождение восстановления камеры холода, сопровождение технического описания для испытаний моноблока, разработка и оформление &quot;Программы испытаний водяной помпы&quot;.",
  },
  "work-position3": {
    "ua": "Технік",
    "en": "Technician",
    "ru": "Техник",
  },
  "organization3": {
    "ua": "ООО &quot;Воля-Кабель&quot;",
    "en": "ООО &quot;Воля-Кабель&quot;",
    "ru": "ООО &quot;Воля-Кабель&quot;",
  },
  "work-period3": {
    "ua": "2014 - 2016 роки <span class=&quot;line&quot;> | </span> Харків",
    "en": "2014 - 2016 years <span class=&quot;line&quot;> | </span> Kharkiv",
    "ru": "2014 - 2016 года <span class=&quot;line&quot;> | </span> Харьков",
  },
  "work-description3": {
    "ua": "Займався підключенням інтернет-послуг та телебачення від обладнання компанії до споживачів абонентів.",
    "en": "I was engaged in connecting Internet services and television from the company's equipment to the subscribers' consumers.",
    "ru": "Занимался подключением интернет услуг и телевидения от оборудования компании до потребителей абонентов.",
  },
  "work-position4": {
    "ua": "Інженер з налаштування та тестування",
    "en": "Setup and Testing Engineer",
    "ru": "Инженер по настройке и испытаниям",
  },
  "organization4": {
    "ua": "ДП &quot;Завод ім. Малишева&quot;",
    "en": "DP &quot;Plant im. Malysheva&quot;",
    "ru": "ГП &quot;Завод им. Малышева&quot;",
  },
  "work-period4": {
    "ua": "2009 - 2013 роки <span class=&quot;line&quot;> | </span> Харків",
    "en": "2009 - 2013 years <span class=&quot;line&quot;> | </span> Kharkiv",
    "ru": "2009 - 2013 года <span class=&quot;line&quot;> | </span> Харьков",
  },
  "work-description4": {
    "ua": "Під час роботи займався налаштуванням та проведення випробувань дизель-генераторів сімейства Д100, а також працював Інженером-конструктором та Випробувачем двигунів.",
    "en": "During his work, I was engaged in setting up and testing diesel generators of the family D100, and also worked as a Design Engineer and Engine Tester.",
    "ru": "Во время работы занимался настройкой и проведение испытаний дизель-генераторов семейства Д100, а также работал Инженером-конструктором и Испытателем двигателей.",
  },
  "title-education": {
    "ua": "Освіта:",
    "en": "Education:",
    "ru": "Образование:",
  },
  "education-title1": {
    "ua": "Комп’ютерна академія &quot;ШАГ&quot;",
    "en": "Computer Academy &quot;STEP&quot;",
    "ru": "Компьютерная академия &quot;ШАГ&quot;",
  },
  "education-specialization1": {
    "ua": "&quot;Тестування програмного забезпечення&quot; - Quality Assurance",
    "en": "&quot;Software testing&quot; - Quality Assurance",
    "ru": "&quot;Тестирование программного обеспечения&quot; - Quality Assurance",
  },
  "education-period1": {
    "ua": "Лютий 2021р. – Жовтень 2021р. <span class=&quot;line&quot;> | </span> Харків",
    "en": "February 2021 - October 2021 <span class=&quot;line&quot;> | </span> Kharkiv",
    "ru": "Февраль 2021г.- Октябрь 2021г. <span class=&quot;line&quot;> | </span> Харьков",
  },
  "education-title2": {
    "ua": "Національний технічний університет &quot;Дніпровська політехніка&quot;",
    "en": "National Technical University &quot;Dnipro Polytechnic&quot;",
    "ru": "Национальный технический университет &quot;Днепровская политехника&quot;",
  },
  "education-specialization2": {
    "ua": "&quot;Буріння свердловин&quot; - Інженер-механік",
    "en": "&quot;Well drilling&quot; - Mechanical Engineer",
    "ru": "&quot;Бурение скважин&quot; - Инженер-механик",
  },
  "education-period2": {
    "ua": "Вересень 2019р. – Грудень 2020р. <span class=&quot;line&quot;> | </span> Дніпро",
    "en": "September 2019 - December 2020 <span class=&quot;line&quot;> | </span> Dnipro",
    "ru": "Сентябрь 2019г.- Декабрь 2020г. <span class=&quot;line&quot;> | </span> Днепр",
  },
  "education-title3": {
    "ua": "Харківський державний автомобільно-дорожній технічний університет",
    "en": "Kharkiv State Automobile and Road Technical University",
    "ru": "Харьковский государственный автомобильно-дорожный технический университет",
  },
  "education-specialization3": {
    "ua": "&quot;Двигуни внутрішнього згоряння&quot; - Інженер-механік",
    "en": "&quot;Internal combustion engines&quot; - Mechanical Engineer",
    "ru": "&quot;Двигатели внутреннего сгорания&quot; - Инженер-механик",
  },
  "education-period3": {
    "ua": "Вересень 2004р. – Липень 2009р. <span class=&quot;line&quot;> | </span> Харків",
    "en": "September 2004 - June 2009 <span class=&quot;line&quot;> | </span> Kharkiv",
    "ru": "Сентябрь 2004г.- Июль 2009г. <span class=&quot;line&quot;> | </span> Харьков",
  },
  "sidebar-title": {
    "ua": "Контакти:",
    "en": "Contacts:",
    "ru": "Контакты:",
  },
  "contact-telephone": {
    "ua": "Тел:",
    "en": "Ph:",
    "ru": "Тел:",
  },
  "contact-link": {
    "ua": "Харків, вул. Киргизька, 2",
    "en": "Kharkiv, Kirgizska str., 2",
    "ru": "Харьков, ул. Киргизская, 2",
  },
  "tech-skills-title": {
    "ua": "Технічні навички:",
    "en": "Tech skills:",
    "ru": "Технические навыки:",
  },
  "soft-skills-title": {
    "ua": "Особисті якості:",
    "en": "Soft skills:",
    "ru": "Личностные качества:",
  },
  "soft-skills-li1": {
    "ua": "Знання HTML, CSS, SQL, JavaScript на рівні, достатньому для створення та підтримки сайту;",
    "en": "Knowledge of HTML, CSS, SQL, JavaScript at a level sufficient to create and support tests;",
    "ru": "Знание основ HTML, CSS, SQL, JavaScript;",
  },
  "soft-skills-li2": {
    "ua": "Знання основ тестування;",
    "en": "Knowledge of the basics of testing;",
    "ru": "Знание основ тестирования;",
  },
  "soft-skills-li3": {
    "ua": "Чудовий досвід роботи з операційною системою MS Windows;",
    "en": "Experience working in MS Windows operating systems;",
    "ru": "Опыт работы c операционной системой MS Windows;",
  },
  "soft-skills-li4": {
    "ua": "Розуміння принципів роботи браузерів (Chrome, Firefox, Opera, Yandex);",
    "en": "Understanding how browsers work (Chrome, Firefox, IE, Yandex);",
    "ru": "Понимание принципов работы браузеров (Chrome, Firefox, IE, Yandex);",
  },
  "soft-skills-li5": {
    "ua": "Знайомий з основними техніками тест-дизайну (класи еквівалентності, граничні значення, діаграма станів та переходів);",
    "en": "Familiar with the basic techniques of test design (equivalence classes, boundary values, state and transition diagram);",
    "ru": "Знаком с основными техниками тест-дизайна (классы эквивалентности, граничные значения, диаграмма состояний и переходов);",
  },
  "soft-skills-li6": {
    "ua": "Маю уявлення про складання тест-кейсів, чек-листів та баг-репортів;",
    "en": "I have an idea about the preparation of test cases, checklists and bug reports;",
    "ru": "Имею представление о составлении тест-кейсов, чек-листов и баг-репортов;",
  },
  "soft-skills-li7": {
    "ua": "Знайомий з баг-трекінговою системою (Jira);",
    "en": "I am familiar with the work of the bug tracking system (Jira);",
    "ru": "Знаком с работой баг-трекинговой системой (Jira);",
  },
  "soft-skills-li8": {
    "ua": "Працюю з редактором коду для кросплатформної розробки веб- та хмарних додатків Visual Studio Code. Є навички працювання з мовою програмування C# та її інтегрованим середовищем розробки Microsoft Visual Studio;",
    "en": "Ability to work with the C# programming language and its integrated development environment Microsoft Visual Studio;",
    "ru": "Работаю с редактором кода для кроссплатформенной разработки веб- и облачных приложений Visual Studio Code. Умение работать с языком программирования C# и его интегрированной средой разработки Microsoft Visual Studio;",
  },
  "soft-skills-li9": {
    "ua": "Розуміння методологій розробки програмного забезпечення;",
    "en": "Understanding software development methodologies;",
    "ru": "Понимание методологий разработки программного обеспечения;",
  },
  "soft-skills-li10": {
    "ua": "Розумію, що таке Командна робота, Адаптивність до різних ситуацій, пошук неохідних Інформаційних матеріалів, Вирішення потупаючих проблем, підхід до роботи з Креативністю, постійне Спілкування з колективом, Трудова етика та Увага до деталей.",
    "en": "I understand what Teamwork is, Adaptability to different situations, searching for indispensable Information materials, Solving pressing problems, approach to work with Creativity, constant Communication with the team, Work ethics and Attention to details.",
    "ru": "Понимаю, что такое Командная работа, Адаптивность к различным ситуациям, поиск необходимых Информационных материалов, Решение проблем, подход к работе с Креативностью, постоянное Общение с коллективом, Трудовая этика и Внимание к деталям.",
  },
  // "tablet__sidebar-title": {
  //   "ua": "Контакти:",
  //   "en": "Contacts:",
  //   "ru": "Контакты:",
  // },
  // "tablet__contact-telephone": {
  //   "ua": "Тел:",
  //   "en": "Ph:",
  //   "ru": "Тел:",
  // },
  // "tablet__contact-link": {
  //   "ua": "Харків, вул. Киргизька, 2",
  //   "en": "Kharkiv, Kirgizska str., 2",
  //   "ru": "Харьков, ул. Киргизская, 2",
  // },
  "tablet__tech-skills-title": {
    "ua": "Технічні навички:",
    "en": "Tech skills:",
    "ru": "Технические навыки:",
  },
  "tablet__soft-skills-title": {
    "ua": "Особисті якості:",
    "en": "Soft skills:",
    "ru": "Личностные качества:",
  },
  "tablet__soft-skills-li1": {
    "ua": "Знання HTML, CSS, SQL, JavaScript на рівні, достатньому для створення та підтримки сайту;",
    "en": "Knowledge of HTML, CSS, SQL, JavaScript at a level sufficient to create and support tests;",
    "ru": "Знание основ HTML, CSS, SQL, JavaScript;",
  },
  "tablet__soft-skills-li2": {
    "ua": "Знання основ тестування;",
    "en": "Knowledge of the basics of testing;",
    "ru": "Знание основ тестирования;",
  },
  "tablet__soft-skills-li3": {
    "ua": "Досвід роботи з операційною системою MS Windows;",
    "en": "Experience working in MS Windows operating systems;",
    "ru": "Опыт работы c операционной системой MS Windows;",
  },
  "tablet__soft-skills-li4": {
    "ua": "Розуміння принципів роботи браузерів (Chrome, Firefox, ME, Yandex);",
    "en": "Understanding how browsers work (Chrome, Firefox, ME, Yandex);",
    "ru": "Понимание принципов работы браузеров (Chrome, Firefox, ME, Yandex);",
  },
  "tablet__soft-skills-li7": {
    "ua": "Знайомий з баг-трекінговою системою (Jira);",
    "en": "I am familiar with the work of the bug tracking system (Jira);",
    "ru": "Знаком с работой баг-трекинговой системой (Jira);",
  },
  "tablet__soft-skills-li8": {
    "ua": "Працюю з редактором коду для кросплатформної розробки веб- та хмарних додатків Visual Studio Code. Є навички працювання з мовою програмування C# та її інтегрованим середовищем розробки Microsoft Visual Studio;",
    "en": "Ability to work with the C# programming language and its integrated development environment Microsoft Visual Studio;",
    "ru": "Работаю с редактором кода для кроссплатформенной разработки веб- и облачных приложений Visual Studio Code. Умение работать с языком программирования C# и его интегрированной средой разработки Microsoft Visual Studio;",
  },
  "tablet__soft-skills-li9": {
    "ua": "Розуміння методологій розробки програмного забезпечення;",
    "en": "Understanding software development methodologies;",
    "ru": "Понимание методологий разработки программного обеспечения;",
  },
  "tablet__soft-skills-li10": {
    "ua": "Розумію, що таке Командна робота, Адаптивність до різних ситуацій, пошук неохідних Інформаційних матеріалів, Вирішення потупаючих проблем, підхід до роботи з Креативністю, постійне Спілкування з колективом, Трудова етика та Увага до деталей.",
    "en": "I understand what Teamwork is, Adaptability to different situations, searching for indispensable Information materials, Solving pressing problems, approach to work with Creativity, constant Communication with the team, Work ethics and Attention to details.",
    "ru": "Понимаю, что такое Командная работа, Адаптивность к различным ситуациям, поиск необходимых Информационных материалов, Решение проблем, подход к работе с Креативностью, постоянное Общение с коллективом, Трудовая этика и Внимание к деталям.",
  },
}