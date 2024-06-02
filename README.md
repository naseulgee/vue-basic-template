# 📌 Vue 프로젝트 추가 설정
<details open>
<summary>접기/펼치기</summary>

## 패키지 설치 및 세팅
```
npm i -D shortid
npm i bootstrap@v5.3.3
```
1. 간단한 고유 id 생성 패키지 설치
    - shortid
2. bootstrap 패키지 설치
    - bootstrap@v5.3.3

## 파일 및 폴더 CUD
1. src/scss/main.scss

## 설정 파일 수정 및 생성
1. 

### 파일 내용 수정
1. main.scss
2. App.vue
</details>


# webpack 기반 vue로 전환
<details>
<summary>접기/펼치기</summary>

## 저장소 복사
```
npx degit 깃헙계정/저장소 폴더명
npm i
```
1. 저장소 복사  
    - degit: 버전관리를 제외하여 처음부터 프로젝트를 시작 가능하다
    - clone: 버전관리 포함하여 복사
    - download.zip -> 파일 붙여넣기  
      (~~SSH 토큰 인증 문제로 degit이 작동되지 않는다면~~  
       -> repository visibility 설정이 **private**인 경우 복사되지 않는다)
2. 선언되어 있는 필요 모듈 설치

## 패키지 설치 및 세팅
```
npm i vue@next
npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
npm i -D file-loader
npm i -D eslint eslint-plugin-vue babel-eslint
npm i vue-router@4
```
1. vue 패키지 설치
    - vue@next
        : Vue 파일의 문법을 해석하게 함
        : 최신 버전으로 설치하는 @next 가 안되면 @latest 또는 @3.4.26
2. vue 관리용 패키지 설치
    - vue-loader@next
    - vue-style-loader
        : Vue 파일 내부의 css 파일을 해석하게 함
    - @vue/compiler-sfc
        : Vue 파일을 변환하여 브라우저에서 동작할 수 있는 형태로 만듦
3. 파일 출력을 위한 패키지 설치
    - file-loader
        : 파일을 읽어 브라우저에 출력해줌
4. ESLint 패키지 설치
    - eslint
    - eslint-plugin-vue
    - babel-eslint
        : 안되면 @babel/eslint-parser
5. vue-router 패키지 설치
    - vue-router@4

## 파일 및 폴더 CUD
1. src/App.vue
2. ~~js~~/main.js -> src/main.js
3. static/images -> src/assets
4. src/components/HelloWorld.vue
5. src/routes/index.js
5. src/routes/Home.vue

## 설정 파일 수정 및 생성
1. webpack.config.js
2. **.eslintrc.js**

### 파일 내용 수정
1. index.html
2. main.js
3. App.vue
4. HelloWorld.vue
5. Home.vue
</details>


# [참고] webpack 기반 세팅
<details>
<summary>접기/펼치기</summary>

## 패키지 설치 및 세팅
```
npm init -y
npm i -D webpack webpack-cli webpack-dev-server@next html-webpack-plugin
npm i -D copy-webpack-plugin
npm i -D css-loader style-loader sass-loader sass postcss autoprefixer postcss-loader
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader
```
1. package.json 파일 생성
2. 웹팩 패키지 설치
    - webpack
    - webpack-cli
    - webpack-dev-server@next
        : 개발 서버 오픈 시 수정한 코드를 바로 반영하여 볼 수 있도록 함
    - html-webpack-plugin
        : main.js 파일에 index.html 삽입하여 개발 서버를 오픈하게함
3. 파일 복사를 위한 패키지 설치(이미지 등)
    - copy-webpack-plugin
        : 지정한 폴더 및 패턴과 일치하는 파일을 빌드 시 복사하여 확인 가능하게 함
4. CSS, SCSS를 위한 패키지 설치
    - sass-loader
        : scss 파일을 웹팩에서 읽게 함
    - sass
        : 읽어들인 scss 파일을 해석하게 함
    - postcss-loader
        : postcss를 웹팩에서 동작시키게 함
    - postcss
        : css 파일의 후처리를 도와줌
    - autoprefixer
        : 접근성을 위한 접두사를 붙여줌
    - css-loader
        : js에서 css 파일을 해석하게 함
    - style-loader
        : css 파일을 html에 삽입하게 함
5. JS를 위한 Babel 패키지 설치
    - babel-loader
        : js 파일을 웹팩에서 읽게 함
    - @babel/core
    - @babel/preset-env
    - @babel/plugin-transform-runtime
        : 비동기 처리하는 async await 문법을 사용 가능하게 함

## 기본 테스트를 위한 파일 및 폴더 생성
1. index.html
2. js/main.js
3. css/style.css
4. scss/main.scss
5. static/favicon.ico
6. static/images/logo.png

## 설정 파일 생성
1. webpack.config.js
2. .postcssrc.js
3. .babelrc.js

### 파일 내용 수정
1. package.json 파일 내용 수정
```
  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "browserslist": [
    "> 1%",
    "last 2 version"
  ]
```
2. webpack.config.js 파일 내용 입력
3. .postcssrc.js 파일 내용 입력
4. .babelrc.js 파일 내용 입력
</details>


# [참고] Git
<details>
<summary>접기/펼치기</summary>

```
git init
git remote add origin 저장소주소
git pull origin 저장소주소
git status
git add .
git status
git commit -m "메세지"
git push origin master
```
</details>


# [참고] VSCode Settings
<details>
<summary>접기/펼치기</summary>

## Extensions
- Auto Close Tag
- Auto Rename Tag
- Dracula Official
- ESLint (**v2.2.2**)
- HTML CSS Support
- HTML Snippets
- indent-rainbow
- TODO Highlight
- Vue-Official

## 코드 자동완성 파일 생성
- ./vscode/**파일명.code-snippets** 생성 및 내용 입력

## Settings.json
```
"workbench.colorTheme": "Dracula",
"editor.renderWhitespace": "all",
"editor.tabSize": 4,
"todohighlight.keywords": [
    {
        "text": "NOTE:",
        "color": "#ffffff",
        "backgroundColor": "deepskyblue",
        "overviewRulerColor": "grey"
    },
    {
        "text": "Vue:",
        "color": "#ffffff",
        "backgroundColor": "#42b883",
        "overviewRulerColor": "grey"
    },
    {
        "text": "★",
        "color": "red",
        "backgroundColor": "yellow",
        "overviewRulerColor": "grey"
    },
],
"[vue]": {
    "editor.defaultFormatter": "Vue.volar"
},
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```
</details>