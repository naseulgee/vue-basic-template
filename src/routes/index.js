/** NOTE:
 * [참고] https://router.vuejs.kr/installation
 * [참고] https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
 * 라우터를 이용해 페이지를 관리해 주는 구성 파일
 * 내보내지는 라우터 플러그인 -> main.js 에서 사용된다.
*/
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/Home'
import SampleRouter from './sampleRouter'
import SampleLayout from './sampleLayout'

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
        ...SampleLayout,
        {
            path: '/',
            alias: '/home',
            component: Home,
            // children: [ { ... } ],
            // meta: { layout: SubLayout, },
        },
    ]
})