<template>
    <MainHeader />
    <main>
        <h1>Sample Layout</h1>
        <br />

        <div class="sample-container">
            <Navigation />
            <!-- NOTE: 레이아웃 컴포넌트를 호출한 부분에서 내부에 작성한 컴포넌트가 전달되어 그려진다. -->
            <slot></slot>
        </div>
    </main>
</template>

<script>
import MainHeader from "~/components/common/Header";
import Navigation from '~/components/common/NavigationForSample';

export default {
    components: {
        MainHeader,
        Navigation,
    }
}
</script>

<style lang="scss">
@import "~/scss/main";

.sample-container > section {
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