<template>
    <MainHeader />
    <main>
        <h1>Sub Layout</h1>
        <br />

        <div class="sample-container">
            <!-- NOTE: 레이아웃 컴포넌트를 호출한 부분에서 내부에 작성한 컴포넌트가 전달되어 그려진다. -->
            <slot></slot>
        </div>
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