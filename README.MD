# Базовая сборка webpack: 
babel, postCSS + cssNext, devServer

Сжатие: cssnano, UglifyJs

## Установка:

```sh
$ npm install
```

## Запуск
```sh
$ npm run dev
$ npm run build
```

### Примечание
Для линукса возможно нужно без set:
```
set NODE_ENV=production
```

### Cтруктура:
- build
- src
    - app.js
    - index.html
    - index.pcss
- .babelrc
- package.json
- webpack.build.config.js
- webpack.dev.config.js
