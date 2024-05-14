<template>
    <BasicBind />

    <EventBind />

    <Computed />

    <LifeCycleHook />

    <Watch />

    <Directive />

    <ClassBind />

    <FormBind />
</template>

<script>
import BasicBind from '~/components/BasicBind';
import EventBind from '~/components/EventBind';
import Computed from '~/components/Computed';
import LifeCycleHook from '~/components/LifeCycleHook';
import Watch from '~/components/Watch';
import Directive from '~/components/Directive';
import ClassBind from '~/components/ClassBind';
import FormBind from '~/components/FormBind';

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
    },
    // 전달받을 속성 정의
    props: {
        //속성의 옵션을 지정한다. boolean 타입을 제외하고 defualt와 required 둘 중 하나를 지정해줘야 한다.
        // name: {
            // type: String,    // 타입
            // default: ""      // 기본값
            //required: true // 필수 지정
        // }
    },
    // 사용할 데이터 명시
    data() {
        return {
        }
    },
    // 계산하여 사용할 데이터 명시
    computed: {
    },
    // 사용할 메서드 명시
    methods: {
    },
    // 데이터가 변경될 때 동작할 메서드 명시
    watch: {
    },
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
-->
<style lang="scss">
section {
    border-radius: 10px;
    background-color: aliceblue;
    margin: 10px 20px;
    padding: 10px;
    font-size: 50px;
    line-height: 1.5;
}
@media (max-width: 800px) {
    section {
    font-size: 30px;
}
}
h1 {
    margin: 0 20px;
    font-size: 1em;
}
h2 {
    margin: 15px 40px;
    font-size: .85em;
}
ul{
    margin: 15px 50px;
    li{

        list-style: inside;
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
</style>