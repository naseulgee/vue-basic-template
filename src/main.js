import { createApp } from "vue"
import App from "./App"
import router from "./routes/index.js"

// NOTE: fontawesome 호출
// [참고] https://velog.io/@devbinna/Vue.js-fontawesome-%EC%82%AC%EC%9A%A9
// fontawesome 코어
import { library } from '@fortawesome/fontawesome-svg-core'
// fontawesome 컴포넌트
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// fontawesome 사용할 아이콘 명시
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

createApp(App)//Root 컴포넌트 연결
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)  //라우터 플러그인 연결
.mount("#app")//렌더링할 HTML 요소 지정