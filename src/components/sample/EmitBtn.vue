<template>
    <!-- NOTE: 부모 컴포넌트에 적용된 이벤트를 적용시키는 속성
        [참고] https://v3-docs.vuejs-korea.org/guide/components/events.html
        - emits: ['이벤트명']             : 부모 컴포넌트가 상속하는 이벤트 중 사용할 이벤트 선언
        - $emit('이벤트명', 매개변수1, ...) : 선언된 이벤트 중 발생시킬 이벤트 명시
    -->
    <button
        class="btn"
        @click="$emit('click')">
        <slot></slot>
    </button>
    <button
        class="btn"
        @dblclick="$emit('someEvent')">
        second btn
    </button>
    <button
        class="btn"
        @dblclick="$emit('someEvent', $event)">
        3rd btn
    </button>
    <input
        type="text"
        v-model="msg" />
</template>

<script>
export default {
    // 부모 컴포넌트에 적용된 이벤트 명을 명시한다
    emits: [
        'click',
        'someEvent',
        'changeMsg'
    ],
    data() {
        return {
            msg: ""
        }
    },
    watch: {
        msg() {
            this.$emit('changeMsg', this.msg)
        }
    }

}
</script>