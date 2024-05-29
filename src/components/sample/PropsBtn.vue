<template>
    <!-- NOTE: props: 상위 컴포넌트에서 전달한 속성을 받아 데이터로 사용한다.
        [참고] https://v3-docs.vuejs-korea.org/guide/components/props.html
    -->
    <button
        class="btn"
        :class="{ large }"
        :style="{ backgroundColor: err ? 'red' : color }">
        {{ cnt }}
    </button>
</template>

<script>
export default {
    // 전달받을 속성 정의
    props: {
        color: {
            //속성의 옵션을 지정한다.
            // boolean 타입을 제외하고 defualt와 required 둘 중 하나를 지정해줘야 한다.
            type: String,    // 타입
            default: "#fff"  // 기본값
            //required: true // 필수 지정
        },
        cnt: {
            type: Number,
            default: 0
        },
        large: {
            type: Boolean,
            default: false
        },
        err: {
            type: Boolean,
        }
    },
}
</script>

<style scoped lang="scss">
.btn{
    &.large{
        font-size: 1.2em;
    }
    &.err{}
}
</style>