<template>
    With Inject: {{ msg }}
</template>

<script>

export default {
    //provide 에 명시한 데이터명을 명시한다.
    inject: ['msg'],
}
</script>