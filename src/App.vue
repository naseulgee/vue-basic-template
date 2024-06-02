<template>
    <!-- NOTE: routes/index.js 에서 설정한 주소에 일치하는 컴포넌트가 그려진다. -->
    <RouterView />
</template>

<!-- NOTE: 전역으로 적용되어야 하기 때문에 scoped를 명시하지 않는다. -->
<style lang="scss">
    @import "~/scss/main";
</style>