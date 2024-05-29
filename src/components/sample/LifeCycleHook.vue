<template>
    <section>
        <h1>
            {{ msg }}
            <button
                class="btn"
                @click="add">
                CLICK HERE! (add ?!)
            </button>
        </h1>
    </section>
</template>

<script>
export default {
    data(){
        return {
            msg: "Life Cycle"
        }
    },
    methods: {
        add() {
            this.msg += "?!"
        }
    },

    /** NOTE: 라이프사이클 훅
     * [참고] https://v3-docs.vuejs-korea.org/guide/essentials/lifecycle.html
     * [이미지 참고] https://v3-docs.vuejs-korea.org/assets/lifecycle.d3fe54ca.png
     * [실행 순서]
     *  createApp().mount() : 컴포넌트 생성 및 컴포넌트를 HTML 구조에 연결 요청
     *  변수, 라이프사이클 등 초기화
     *  setup()             : 컴포지션 API 실행
     *  beforeCreate()
     *  선언한 데이터, 반응성 등이 만들어짐★
     *★created()           : -> 선언한 데이터 접근 가능
     *  템플릿 유무 확인       : -> 템플릿이 있을 경우 컴파일
     *  beforeMount()
     *  선언한 옵션들을 실제 DOM에 연결
     *★mounted()           : -> DOM 요소 검색 가능
     *  데이터 변경
     *  beforeUpdate()
     *  가상 DOM 리렌더링 및 패치
     *  updated()           : -> 변경된 데이터 확인 가능
     *  .unmount()          : 컴포넌트 제거 요청
     *  beforeDestroy()
     *  destroyed()         : -> 실제 컴포넌트 제거
    */
    beforeCreate() { // 컴포넌트 생성 및 초기화 후
        console.log('Before Create!', this.msg, document.querySelector("h1"))
    },
    created() {     // 데이터 생성 후
        console.log('Created!'      , this.msg, document.querySelector("h1"))
    },
    beforeMount() { // DOM 연결 전
        console.log('Before Mount!' , this.msg, document.querySelector("h1"))
    },
    mounted() {     // DOM 연결 후
        console.log('Mounted!'      , this.msg, document.querySelector("h1"))
    },
    beforeUpdate() { // 데이터 변경 후 렌더링 전
        console.log('Before Update!' , this.msg, document.querySelector("h1"))
    },
    updated() {     // 데이터 변경 후 렌더링 후
        console.log('Updated!'      , this.msg, document.querySelector("h1"))
    },
}
</script>