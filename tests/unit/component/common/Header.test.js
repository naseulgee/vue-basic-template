import { shallowMount } from "@vue/test-utils"
import store from '~/store'
import router from '~/routes'
import Header from '~/components/common/Header'
/** NOTE: 모의 라우터 사용
 * [참고] https://test-utils.vuejs.org/guide/advanced/vue-router.html
 * 
 * - 라우터 이동은 테스트 컴포넌트가 마운트 되기 전에 이루어져야 한다
 * - 라우터의 함수는 비동기로 동작하기 때문에 isReady() 로 대기시켜줘야 한다
 */

describe('components/common/Header.vue', () => {
    // 동일한 테스트 고유 환경 세팅
    let wrapper
    beforeEach(async () => {
        window.scrollTo = jest.fn() // 관련 없는 실행 함수에 모의 함수 세팅 => router 의 scrollBehavior

        // 접속 주소 세팅
        router.push('/dynamic-path/tt4520988')
        await router.isReady() // 라우터 대기

        wrapper = shallowMount(Header, { // Header 만 테스트 할거라서
            global: {
                plugins: [ store, router ], // 필요한 플러그인 지정
                stubs: ['FontAwesomeIcon'], // 컴포넌트 대체 지정
            }
        })
    })

    test('경로 변경 시 active 클래스명이 활성화 되어야 합니다', () => {
        expect(wrapper.findAll('router-link-stub')[2].element.classList).toContain('active')
    })

    // 메소드 isMatch 테스트
    test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
        const regExp = undefined
        expect(wrapper.vm.isMatch(regExp)).toBe(false)
    })

    test('경로 정규표현식과 일치해야 합니다', () => {
        const regExp = /^\/dynamic-path/ // header 동적 경로 설정에 명시한 정규표현식
        expect(wrapper.vm.isMatch(regExp)).toBe(true)
    })
})