### Client 환경구축

```
$ cd packages/client
$ mkdir public
$ echo > index.html
> index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack without CRA</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>

$ yarn add react-dom react
$ yarn add -D @types/react-dom @types/react
$ yarn add -D babel-loader @babel/core
$ yarn add -D @babel/preset-env @babel/preset-react @babel/preset-typescript
$ yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin
$ yarn add -D @types/html-webpack-plugin @types/clean-webpack-plugin

$ tsc --init
$ echo > babel.config.js
> babel.config.js 파일 참고

$ echo > webpack.config.ts
> webpack.config.ts 파일 참고
```
