import { createApp } from "vue"
import App from "./App"
import router from "./routes/index.js"

createApp(App)//Root 컴포넌트 연결
.use(router)  //라우터 플러그인 연결
.mount("#app")//렌더링할 HTML 요소 지정