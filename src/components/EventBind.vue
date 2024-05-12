<template>
    <!-- NOTE: 템플릿 문법
        v-on  : method 에 선언된 함수를 이벤트와 바인딩 시켜준다.
            -★@이벤트="함수명"     : v-on 생략 형태
            -★@[변수명]="함수명"   : 이벤트 부분 또한 동적으로 데이터를 전달받을 시 사용
    -->
    <section>
        <h1>이벤트 바인딩</h1>
        <ul class="event">
            <li>
                <button
                    class="btn"
                    @click="increment">
                    CLICK HERE! (add count)
                </button>
            </li>
            <li>
                <button
                    class="btn"
                    @[event]="increment">
                    CLICK HERE! (add count)
                </button>
            </li>
            <li>
                {{ count }}
            </li>
            <li v-once>
                {{ count }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    // 사용할 데이터 명시
    data() {
        return {
            count: 0,
            event: "click",
        }
    },
    // 사용할 메서드 명시
    methods: {
        increment() {
            // data에 명시한 데이터 지정
            this.count++
        },
    },
}
</script>

<style scoped lang="scss">
ul{
    &.event{
        color: royalblue;
    }
}
</style>