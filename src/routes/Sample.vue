<template>
    <BasicBind />

    <EventBind />

    <Computed />

    <LifeCycleHook />

    <Watch />

    <Directive />

    <ClassBind />

    <FormBind />

    <ComponentEx />

    <ProvideEx />

    <Refs />

    <OptionAPI
        class="btn"
        style="font-size: 1.5em; font-weight: bold;"
        color="royalblue"
        @hello="console.log('Hello OptionAPI')">
        Option API
    </OptionAPI>
    <CompositionAPI
        class="btn"
        style="font-size: 1.5em; font-weight: bold;"
        color="royalblue"
        @hello="console.log('Hello CompositionAPI')">
        Composition API
    </CompositionAPI>
</template>

<script>
import BasicBind from '~/components/sample/BasicBind';
import EventBind from '~/components/sample/EventBind';
import Computed from '~/components/sample/Computed';
import LifeCycleHook from '~/components/sample/LifeCycleHook';
import Watch from '~/components/sample/Watch';
import Directive from '~/components/sample/Directive';
import ClassBind from '~/components/sample/ClassBind';
import FormBind from '~/components/sample/FormBind';
import ComponentEx from '~/components/sample/ComponentEx';
import ProvideEx from '~/components/sample/ProvideEx';
import Refs from '~/components/sample/Refs';
import CompositionAPI from '~/components/sample/CompositionAPI';
import OptionAPI from '~/components/sample/OptionAPI';

export default {
    //현재 컴포넌트에서 사용할 컴포넌트 명시
    components: {
        //BasicBind: BasicBind // (O)
        BasicBind,             // (O)
        EventBind,
        Computed,
        LifeCycleHook,
        Watch,
        Directive,
        ClassBind,
        FormBind,
        ComponentEx,
        ProvideEx,
        Refs,
        CompositionAPI,
        OptionAPI,
    },
    // 속성 자동 맵핑을 원하지 않을 경우 false 로 설정. 기본값 true
    inheritAttrs: true,
    // 부모 컴포넌트에게 전달받을 속성 정의
    props: {
    },
    // 부모 컴포넌트에게 전달받을 이벤트 명을 명시
    emits: [
    ],
    // 조상 컴포넌트에게 전달받을 데이터 명시
    inject: [
    ],
    // 사용할 데이터 명시
    data() {
        return {
        }
    },
    // 계산하여 사용할 데이터 명시
    computed: {
    },
    // 자손 컴포넌트에 전달할 데이터를 명시
    provide(){
        return {
        }
    },
    // 사용할 메서드 명시
    methods: {
    },
    // 데이터가 변경될 때 동작할 메서드 명시
    watch: {
    },

    // 컴포지션 API 선언부
    setup(){
        return { // 사용할 데이터와 메소드 명시
        }
    },
    /* ================ 컴포넌트 생명주기 ================ */
    beforeCreate() { // 컴포넌트 생성 및 초기화 후
    },
    created() {     // 데이터 생성 후
    },
    beforeMount() { // DOM 연결 전
    },
    mounted() {     // DOM 연결 후
    },
    beforeUpdate() { // 데이터 변경 후 렌더링 전
    },
    updated() {     // 데이터 변경 후 렌더링 후
    },
}
</script>

<!-- NOTE: CSS 속성
    lang: 전처리기 언어를 선언
    scoped: 스타일을 선언된 컴포넌트에서만 사용
    :deep: 자손 컴포넌트에서도 사용(권장되는 방식은 아님)
-->
<style lang="scss" scoped>
section:deep {
    border-radius: 10px;
    background-color: aliceblue;
    margin: 10px 20px;
    padding: 10px;
    font-size: calc(1.375rem + 0.85vw);
    line-height: 1.5;
    ul{
        li{
            list-style: inside !important;
            font-size: .7em;
            ul{
                li{
                    font-size: 1em;
                    color: orange;
                }
            }
        }
    }
    .btn{
        display: inline-block;
        padding: 3px 10px;
        border: 1px solid salmon;
        border-radius: 5px;
        background-color: #fff;
        color: salmon;
        font-size: .8em;
        margin-bottom: 0.1em;
        cursor: pointer;
    }
    input:not([type=checkbox]):not([type=radio]), select, textarea{
        border: 1px solid #3c3c3c4a;
        border-radius: 4px;
        padding: .2em .6em;
        background: #ffffff80;
        font-size: .8em;
        transition: background-color .5s;
        &[type=number]{
            background: #ffffff;
        }
        &:focus {
            outline: 1px solid royalblue;
        }
    }
}
</style>