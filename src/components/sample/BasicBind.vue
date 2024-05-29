<template>
    <!-- NOTE: 템플릿 문법
        [참고] https://v3-docs.vuejs-korea.org/guide/essentials/template-syntax.html
        {{  }}: 일반 텍스트 데이터 바인딩의 가장 기본 형태.
        v-html: 일반 텍스트가 아닌 HTML을 렌더링 시켜준다.
        v-once: 렌더링 시 한 번만 데이터가 반영이 되며, 데이터가 갱신되어도 변하지 않는다.
        v-bind: 속성에 데이터를 바인딩 시켜준다.
            - 속성 부분에는 {{ }} 를 사용할 수 없기 때문이다.
            - 컴포넌트에 사용할 경우 선언한 속성을 하위 컴포넌트에서 props로 받을 수 있다
            -★:속성="변수명"        : v-bind 생략 형태
            -★:[변수명1]="변수명2"  : 속성 부분 또한 동적으로 데이터를 전달받을 시 사용
            - :[변수명1]="'속성값'"  : 속성 부분만 동적으로 데이터를 전달받고 값은 일반 문자로 지정하고 싶을 시 사용
    -->
    <section>
        <h1>데이터 바인딩</h1>
        <h2>기본</h2>
        <ul class="basic">
            <li>
                {{ hTxt }}
            </li>
            <li>
                {{ msg + '??' }}
            </li>
        </ul>
        
        <h2>속성</h2>
        <ul class="attr">
            <li v-html="hTxt"></li>
            <li :class="classNm">
                {{ msg }}
            </li>
            <li :[attr]="classNm">
                {{ msg }}
            </li>
            <li :[attr]="'active'">
                {{ msg }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    // 사용할 데이터 명시
    data() {
        return {
            attr: "class",
            classNm: "active",
            hTxt: "<span style='color: red;'>Hi</span>",
            msg: "Hello World",
        }
    },
}
</script>

<style scoped lang="scss">
ul{
    &.basic{
        color: deeppink;
    }
    &.attr{
        color: deeppink;
    }
}
.active{
    color: yellowgreen;
}
</style>