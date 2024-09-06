import { shallowMount } from '@vue/test-utils'
import FormBind from '~/components/sample/FormBind'
import StoreSearch from '~/components/sample/StoreSearch'

describe('components/sample/FormBind.vue', () => {
    // 동일한 테스트 고유 환경 세팅
    let wrapper
    afterAll  (() => {
        wrapper.unmount()
    })
    beforeEach(async () => {
        wrapper = shallowMount(FormBind)
        await wrapper.setData({
            msg: "Hello!",
            num: 123,
            checked: false,
        })
    })

    test('단방향 바인딩', async() => {
        const input = wrapper.find('input')

        // setData 로 data 의 값을 바꾼 경우
        await wrapper.setData({
            msg: "Hi",
        })
        expect(wrapper.vm.msg).toBe('Hi') // data 의 값이 바뀜
        expect(input.element.value).toBe('Hi') // input 의 내용이 바뀜

        // setValue 로 input 에 값을 입력한 경우
        input.setValue('Hello')
        expect(wrapper.vm.msg).toBe('Hi') // data 의 값이 바뀌지 않음
        expect(input.element.value).toBe('Hello') // input 의 내용이 바뀜
    })

    test('양방향 바인딩', async() => {
        const input = wrapper.findAll('input')[1]

        // setValue 로 input 에 값을 입력한 경우
        input.setValue('Hi')
        expect(wrapper.vm.msg).toBe('Hi') // data 의 값이 바뀜
        expect(input.element.value).toBe('Hi') // input 의 내용이 바뀜
    })

    test('v-model checkbox', async() => {
        const input = wrapper.findAll('input')[3]

        // setValue 로 체크한 경우
        input.setValue(true)
        expect(wrapper.vm.checked).toBe(true) // data 의 값이 바뀜
        expect(input.element.checked).toBe(true) // 체크 여부가 바뀜
    })

    test('input type number', async() => {
        const inputTypeNum   = wrapper.findAll('input')[7]
        const inputVModel    = wrapper.findAll('input')[8]
        const inputVModelNum = wrapper.findAll('input')[9]
        const txt = '123aaa'

        // 초기값 확인
        expect(wrapper.vm.num).toBe(123)
        expect(inputTypeNum.element.value).toBe('123')
        expect(inputVModel.element.value).toBe('123')
        expect(inputVModelNum.element.value).toBe('123')

        inputTypeNum.setValue(txt)
        // input type 이 number 기 때문에 입력되지 않는다 -> 바인딩도 진행 안됨
        expect(inputTypeNum.element.value).toBe('')
        expect(inputVModel.element.value).toBe('123')
        expect(inputVModelNum.element.value).toBe('123')
    })
    test('v-model & input type text', async() => {
        const inputTypeNum   = wrapper.findAll('input')[7]
        const inputVModel    = wrapper.findAll('input')[8]
        const inputVModelNum = wrapper.findAll('input')[9]
        const txt = '123aaa'

        inputVModel.setValue(txt)
        // input type 이 number 기 때문에 공란으로 표기되며, 데이터는 기존값을 갖는다
        expect(inputTypeNum.element.value).toBe('123')
        expect(inputVModel.element.value).toBe(txt)
        // 바인딩이 number 로 제한되어 데이터가 반영되지 않음
        expect(inputVModelNum.element.value).toBe('123')
        // expect(inputVModelNum.text()).toBe(txt) // NOTE: 실제 화면과 다름! => input 요소에 text 를 쓰지 말자
    })
    test('v-model 수식어 num & input type text', async() => {
        const inputTypeNum   = wrapper.findAll('input')[7]
        const inputVModel    = wrapper.findAll('input')[8]
        const inputVModelNum = wrapper.findAll('input')[9]
        const txt = '123aaa'

        // 바인딩이 number 로 제한되어 데이터가 반영되지 않음
        inputVModelNum.setValue(txt)
        expect(inputTypeNum.element.value).toBe('123')
        expect(inputVModel.element.value).toBe('123')
        expect(inputVModelNum.element.value).toBe(txt)
    })
})

describe('components/sample/StoreSearch.vue', () => {
    // 동일한 테스트 고유 환경 세팅
    let wrapper
    afterAll  (() => {
        wrapper.unmount()
    })
    beforeEach(async () => {
        wrapper = shallowMount(StoreSearch)
    })

    test('선택 가능한 연도의 개수가 일치합니다', () => {
        // expect(wrapper.vm.filters.find(filter => {
        //     return filter.name === 'year'
        // }).items.length).toBe(new Date().getFullYear() - 1900 + 1)
        const year = wrapper.vm.filters.find(f => f.name === 'year')
        const yearLength = new Date().getFullYear() - 1900 + 1
        expect(year.items.length).toBe(yearLength)
    })
})