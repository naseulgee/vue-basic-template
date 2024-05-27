<template>
    <!-- NOTE: slot: 상위 컴포넌트에서 하위 컴포넌트 안에 작성한 HTML 코드를 렌더링한다.
        [참고] https://v3-docs.vuejs-korea.org/guide/components/slots.html
        - slot 태그 내부의 내용은 상위 컴포넌트에서 하위 컴포넌트 안에 작성한 HTML 코드가 없을 경우 기본 값으로 출력된다.
        - name: 상위 컴포넌트에서 v-slot 또는 #으로 지정한 이름을 맵핑시킨다.
    -->
    <button class="btn">
        <slot>기본값</slot>
        <slot name="icon"></slot>
        <slot name="text"></slot>
    </button>
</template>