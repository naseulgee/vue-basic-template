<template>
    <section>
        <h1>Watch</h1>
        <ul>
            <li>
                <button
                    class="btn"
                    @click="add">
                    CLICK HERE! (add ?!)
                </button>
            </li>
            <li>
                {{ msg }}
            </li>
            <li>
                {{ reversedMessage }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            msg: "Watch Message"
        }
    },
    computed: {
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
        add(){
            this.reversedMessage += "?!"
        },
    },
    // 데이터가 변경될 때 동작할 메서드 명시
    // NOTE: [실행순서] Setter -> Getter -> Watch -> Render -> beforeUpdate -> updated
    watch: {
        msg() {// 감시할 데이터 변수명을 함수명으로 사용한다
            console.log('Watch: msg 변경')
        },
        reversedMessage(newVal){// 바뀌는 값을 변수로 받을 수 있다
            console.log('Watch: reversedMessage 변경', newVal)
        }
    },
    beforeUpdate() { // 데이터 변경 후 렌더링 전
        console.log('Before Update!' , this.msg)
    },
    updated() {     // 데이터 변경 후 렌더링 후
        console.log('Updated!'      , this.msg)
    },
}
</script>
