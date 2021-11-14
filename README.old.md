Настройка проекта на React:

- установка React "npx create-react-app ."
- установка prettier "npm install --save-dev prettier"
- установка eslint "npm i eslint@7.11.0"
- добавление файла-настроек для prettier .prettierrc.yaml: printWidth: 80
  tabWidth: 2 useTabs: false semi: true singleQuote: true trailingComma: all
  bracketSpacing: true jsxBracketSameLine: false arrowParens: avoid proseWrap:
  always
- инициализация lint-staged и huskynpx "npx mrm@2 lint-staged"
- файл-настройка .huskyrc
  (https://github.com/luxplanjay/react-21-22/tree/02-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82)
- файл-настройка .lintstagedrc
- настройка расширения файлов (внутри package.json): ".{js,jsx}": "eslint
  --cache --fix", ".{js,jsx,css,scss}": "prettier --write"
- установить пакет npm install --save prop-types
- установить пакет npm install gh-pages --save-dev и настроить его
  (https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

Настройка Netlify:

Глобально:

- npm install netlify-cli -g
- netlify login

В проекте:

- В файле package.json добавляем "predeploy": "npm run build", "deploy":
  "netlify deploy -p"
- Файл-настройка netlify.toml
- Запускаем деплой. При первом деплое: создать и настроить новый сайт, команда
  разработчикой, имя
- Настройка сайта на Netlify:
  https://drive.google.com/file/d/1cTg_FOfymCJdC5_DLyo1l8-_ePNdBryZ/view

Redux:

- npm i redux
- npm install react-redux
- npm i @reduxjs/toolkit
- npm i redux-devtools-extension
