<template>
    <li>{{ name }}</li>
</template>

<script>
export default {
    // 전달받을 속성 정의
    props: {
        name: {
            //속성의 옵션을 지정한다. boolean 타입을 제외하고 defualt와 required 둘 중 하나를 지정해줘야 한다.
            type: String,    // 타입
            default: ""      // 기본값
            //required: true // 필수 지정
        }
    }
}
</script>