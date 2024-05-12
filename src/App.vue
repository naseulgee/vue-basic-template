<template>
    <BasicBind />
    
    <EventBind />
</template>

<script>
import BasicBind from '~/components/BasicBind';
import EventBind from '~/components/EventBind';

export default {
    //현재 컴포넌트에서 사용할 컴포넌트 명시
    components: {
        //BasicBind: BasicBind // (O)
        BasicBind,             // (O)
        EventBind,
    },
    // 사용할 데이터 명시
    data() {
        return {
        }
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
}
h1 {
    margin: 0 20px;
    font-size: 50px;
}
h2 {
    margin: 15px 40px;
    font-size: 40px;
}
ul{
    margin: 15px 50px;
    li{
        list-style: inside;
        font-size: 30px;
        ul{
            li{
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
</style>