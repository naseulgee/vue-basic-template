// NOTE: Node.js 환경에서 동작하는 설정 파일
// [참고]: https://webpack.js.org/concepts/

/** NOTE: 
 * 모듈 불러오기
 * - JS: import 모듈명 from "파일 경로"
 * - NodeJS: require("모듈명")
 * 
 * 모듈 내보내기
 * - JS: export default {}
 * - NodeJS: module.export = {}
 */
const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader") // Vue: 추가

module.exports = {
    // Vue: 추가
    resolve: {
        extensions: [//확장자를 따로 명시하지 않아도 되게 하는 설정
            ".js",
            ".vue"
        ],
        alias: {//경로 별칭 설정
            "~": path.resolve(__dirname, "src"),
            "assets": path.resolve(__dirname, "src/assets"),
        }
    },
    //진입점 명시. webpack은 진입점을 html 대신 js를 명시한다
    entry: "./src/main.js",// Vue: 변경 | Webpack: ./js/index.js
    //결과물(번들)을 반환하는 설정 명시. build 했을 때 생성된다
    output: {
        /** NOTE: 
         * __dirname 은 NodeJS에서 제공하는 전역변수로, 현재 파일의 경로를 담고있다.
         * resolve는 두 경로를 합쳐주는 메소드다.
         */
        // path: path.resolve(__dirname, "dist"), //defualt: dist | NodeJS 에서 필요로 하는 절대경로를 명시해야 한다
        // filename: "main.js", //defualt: entry에 지정한 파일과 동일 | 반환된 파일들을 합쳐 생성할 파일명과 확장자를 지정한다
        clean: true, //기존에 내보낸 파일을 제거하는 설정
    },
    //모듈을 검증하는 설정 명시
    module: {
        rules: [
            {// Vue: 추가. vue 파일을 처리하는 설정
                test: /\.vue$/,
                use: "vue-loader"
            },
            {//css 파일을 처리하는 설정
                //검증할 파일 확장자를 명시한다
                test: /\.s?css$/,
                /** NOTE: (위치중요) 위에 선언할수록 나중에 동작한다. */
                //사용할 패키지를 명시한다
                use: [
                    // "vue-style-loader",// Vue: 추가. -> NOTE: 서버 실행 시 error로 인한 주석 처리. 버전이나 웹팩의 loader에서 충돌나는듯?
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {//js 파일을 처리하는 설정
                test: /\.js$/,
                use: [
                    "babel-loader"
                ]
            },
            {// Vue: 추가. 이미지 파일을 처리하는 설정
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                use: "file-loader"
            },
        ]
    },
    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./static",
                }
            ]
        }),
        new VueLoaderPlugin(), // Vue: 추가
    ],
    devServer: {
        host: "localhost",
        port: 8081,
    }
}