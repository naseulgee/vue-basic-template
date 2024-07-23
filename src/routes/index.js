/** NOTE:
 * [참고] https://router.vuejs.kr/installation
 * [참고] https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
 * 라우터를 이용해 페이지를 관리해 주는 구성 파일
 * 내보내지는 라우터 플러그인 -> main.js 에서 사용된다.
*/
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/Home'
import SampleRouter from './sampleRouter'
import SubLayout from '~/layouts/SubLayout'
import StoreItem from '~/components/sample/StoreItem';

export default createRouter({
    /** history 값 종류
     * Hash   : 새로고침 시 페이지를 찾을 수 없습니다 방지 가능 (도메인/#/경로)
     * History: 서버 세팅이 필요함
     */
    history: createWebHashHistory(),
    /** 매칭할 페이지를 배열로 관리한다
     *★path     : 주소
     *  alias    : 별칭 주소
     *  redirect : 리다이렉트 주소
     *★component: RouterView 태그에 보여줄 컴포넌트
     *  children : 컴포넌트 내부의 RouterView 태그에 보여줄 컴포넌트
     *  meta     : 컴포넌트에 전달할 임의의 데이터
     */
    routes: [
        ...SampleRouter,
        {
            path: '/',
            alias: '/home',
            component: Home,
            // children: [ { ... } ],
            // meta: { layout: SubLayout, },
        },
        {
            /** NOTE: 동적 경로 매칭
             * [참고] https://v3.router.vuejs.org/guide/essentials/dynamic-matching.html
             * 동적 경로 사용 시 콜론(:) 뒤에 변수명을 적고, route의 params로 접근할 수 있다.
             * ex) this.$route.params.변수명
             */
            path: '/dynamic-path/:id',
            component: StoreItem,
            meta: { layout: SubLayout, }, // RouterView 에 임의의 데이터로 레이아웃을 지정 후 컴포넌트는 레이아웃의 slot 에서 출력된다. ( App.vue > /layouts/SubLayout.vue > RouterView > slot)
        },
    ]
})