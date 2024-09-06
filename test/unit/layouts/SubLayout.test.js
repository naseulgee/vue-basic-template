import { shallowMount } from '@vue/test-utils'
import router from '~/routes'
import SubLayout from '~/layouts/SubLayout'

describe('layouts/SubLayout.vue', () => {
    // 동일한 테스트 고유 환경 세팅
    let wrapper
    afterAll  (() => {
        wrapper.unmount()
    })
    beforeEach(async () => {
        // 접속 주소 세팅
        router.push('/dynamic-path/something')
        await router.isReady() // 라우터 대기

        wrapper = shallowMount(SubLayout, {
            global: {
                plugins: [ router ],
            }
        })
    })

    test('최초로 접속한 URL의 파라미터를 확인합니다', () => {
        expect(wrapper.vm.$route.params.id).toBe('something')
    })

    test('레이아웃이 잘 반영되었는지 확인합니다', () => {
        expect(wrapper.html()).toContain('Sub Layout')
    })
})