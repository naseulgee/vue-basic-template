<template>
    <!-- NOTE: props 또는 emits 에서 명시하지 않은 속성
        [참고] https://v3-docs.vuejs-korea.org/guide/components/attrs.html
        - 최상위 요소가 하나일 때는 자동으로 상위 컴포넌트에서 전달한 속성이 적용된다.
        - 최상위 요소가 2개 이상일 때는 ★$attrs 를 이용하여 전달한 속성을 적용시킬 수 있다.
            - $attrs         : template 에서 사용할 때
            - this.$attrs    : script 에서 사용할 때
            - v-bind="$attrs": 전달받은 속성을 전부 그대로 사용할 때
    -->
    <button
        :class="$attrs.class">
        {{ $attrs.class }}
    </button>
    <button
        ref="btn"
        :class="$attrs.class"
        :style="$attrs.style">
        {{ $attrs.class }}
    </button>
    <button
        v-bind="$attrs">
        {{ $attrs.class }}
    </button>
</template>

<script>
export default {
    // 속성 자동 맵핑을 원하지 않을 경우 false 로 설정
    // inheritAttrs: false, // 명시하지 않아도 최상위 요소가 2개 이상임으로 자동 맵핑이 되지 않는다
    created(){
        console.log(this.$attrs);
    }
}
</script>