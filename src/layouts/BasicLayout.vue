<template>
    <MainHeader />
    <main>
        <h1>Defualt Layout</h1>
        <!-- NOTE: 레이아웃 컴포넌트를 호출한 부분에서 내부에 작성한 컴포넌트가 전달되어 그려진다. -->
        <slot></slot>
    </main>
</template>

<script>
import MainHeader from "~/components/common/Header";

export default {
    components: {
        MainHeader,
    }
}
</script>