<template>
    <!-- NOTE: 컴포지션 API
        [참고] https://v3-docs.vuejs-korea.org/api/composition-api-setup.html
        [이미지 참고] https://v3-docs.vuejs-korea.org/assets/composition-api-after.e3f2c350.png
        [★비교] OptionAPI.vue
        보기 좋게 ★관련있는 데이터와 로직끼리 모아두는 법
        - setup(props, context) { ... } : 컴포지션 API 선언부. 라이프사이클의 ★beforeCreate 직전에 실행된다.
            - 매개변수로 props 와 context를 갖는다.
                - 옵션 API에서 접근 시 사용했던 this를 대체한다.
                - props 관련
                    - props.변수명                    : 일반적인 접근법. 반응성이 유지된다.
                    - { 변수명1, ... } = toRefs(props): 객체 분해 할당. 반응성이 유지된다.
                    - 변수명 = toRef(props, '변수명')  : 하나의 props 속성만 꺼내는 법. 반응성이 유지된다.
                - context 관련
                    - context.attrs : 비 반응형 객체. $attrs
                    - context.slots : 비 반응형 객체. $slots
                    - context.emit  : 함수. $emit
                    - context.expose: 함수. 로컬 속성 노출
            - ref(값)  : 컴포지션 API내에 데이터 선언 시 ★반응성을 갖기 위해 값을 감쌀 때 사용한다.
            - 값.value : ref를 사용한 변수에 객체 데이터가 할당되기 때문에 script 내 꺼내쓸 때 사용한다.
                - 템플릿 태그 내에서는 값을 그대로 사용하면 된다.
            - 그 외 option API(일반) 에서 사용하는 상태들을 import 로 가져와서 사용할 수 있다.
                - 단, LifeCycle의 경우 앞에 on을 붙여 카멜케이스로 가져와야 한다.
                    -★beforeCreate 와 created는 별도 선언하지 않고 setup 함수 내 어디서든 작성하면 된다.
    -->
    <section>
        <h1>컴포지션 API</h1>
        <ul>
            <li>
                Count: {{ count }}
            </li>
            <li>
                Duble: {{ doubleCount }}
            </li>
            <li>
                <button
                    class="btn"
                    @click="increase">
                    Click
                </button>
            </li>
        </ul>
        <ul>
            <li>
                Message: {{ message }}
            </li>
            <li>
                Reverse: {{ reverseMessage }}
            </li>
            <li>
                <button
                    class="btn"
                    @click="changeMessage">
                    Click Change
                </button>
            </li>
            <li>
                <button
                    :class="$attrs.class"
                    :style="{ color: color }"
                    @click="hello">
                    <slot></slot>
                </button>
            </li>
        </ul>
    </section>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'

export default {
    inheritAttrs: false,
    props: {
        color: {
            type: String,
            default: "#000"
        }
    },
    setup(props, context){
        // let count = 0
        //data
        const count       = ref(0) // 반응성을 갖기 위해 ref 사용 -> 객체데이터가 할당된다.
        //computed
        const doubleCount = computed(() => {
            return count.value * 2
        })
        //methods
        function increase() {
            // count++
            count.value++ // ref 를 사용하였기 때문에 객체데이터의 값을 꺼내어 가공한다.
        }
        // watch(변수명, 콜백함수(newValue, oldValue))
        watch(count, (newValue, oldValue) => {
            console.log(`[컴포지션API] watch:: change count newValue: ${newValue}, oldValue: ${oldValue}`)
        })

        const message        = ref("Hi Composition API")
        const reverseMessage = computed(() => {
            return message.value.split("").reverse().join("")
        })
        function changeMessage() {
            message.value = "Good"
        }
        watch(message, (newValue, oldValue) => {
            console.log(`[컴포지션API] watch:: change message newValue: ${newValue}, oldValue: ${oldValue}`)
        })

        function hello() {
            context.emit("hello")
        }

        // 라이프사이클
        console.log("[컴포지션API] created == setup:: ", count.value, message.value)
        onMounted(() => {
            console.log("[컴포지션API] onMounted:: ", count.value, message.value)
            console.log("[옵션API] mounted:: ", props.color, context.attrs)
        })

        return { // 사용한 변수명과 함수명을 모두 명시한다.
            count,
            doubleCount,
            increase,
            message,
            reverseMessage,
            changeMessage,
            hello,
        }
    }
}
</script>