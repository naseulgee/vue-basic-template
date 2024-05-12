<template>
    <section>
        <h1>계산된 데이터</h1>
        <ul>
            <li>{{ msg }}</li>
            <li>
                <button
                    class="btn"
                    @click="add">
                    CLICK HERE! (add ?!)
                </button>
            </li>
            <li>
                <button
                    class="btn"
                    @click="changeMessage">
                    CLICK HERE! (change vue)
                </button>
            </li>
            <li>
                {{ msg.split("").reverse().join("") }}
            </li>
            <li>
                {{ reversedMessage }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    // 사용할 데이터 명시
    data(){
        return {
            msg: "Before Message"
        }
    },
    // 계산하여 사용할 데이터 명시
    /** NOTE:
     * computed 는 원본 데이터를 손상시키지 않고 계산하여 데이터를 사용할 수 있다.
     * 템플릿 문법에서도 데이터 가공은 가능하나, 여러번 실행 시 여러번 계산이 발생한다.
     * computed 는 캐싱 기능이 있어 한 번 연산한 값을 가지고 있어, 반복 호출을 하여도 계산을 반복하지 않는다.
     */
    computed: {
        // NOTE: 일반적인 get 만 가능
        // reversedMessage(){
        //     return this.msg.split("").reverse().join("")
        // },

        // NOTE: computed 에 선언된 데이터 : get/set 가능하도록 설정
        reversedMessage: {
            get(){ // 일반적으로 호출 시 실행된다
                return this.msg.split("").reverse().join("")
            },
            set(value){ // 호출 후 값을 할당 시 실행된다
                this.msg = value
                console.log("Setter: ", value)
            }
        }
    },
    methods: {
        /** NOTE:
         * this는 현재 .vue 파일에 작성한 script 부분을 가리킨다
         * data 에 선언된 데이터     : get/set 가능
         * computed 에 선언된 데이터 : get 가능     -> set 은 computed 에서 약간의 설정이 필요하다
         */
        add(){
            this.reversedMessage += "?!" // setter 가 실행된다
        },
        changeMessage(){
            this.msg = "Vue!"
        }
    },
}
</script>