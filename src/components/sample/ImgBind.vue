<template>
    <!-- NOTE: 일반적인 이미지 호출이 안될 경우 사용한다.
        - 설정파일의 문제
        - 이미지 경로에 변수가 들어갈 때
    -->
    <section>
        <h1>이미지 바인딩</h1>
        <h2>기본 이미지 호출</h2>
        <ul>
            <li>
                <img :src="require('~/assets/images/common/' + imgName)" />
            </li>
        </ul>
        
        <h2>배경 이미지</h2>
        <ul class="bgImg">
            <li
                class="inline"
                :style="{background: `url(${require('~/assets/images/common/' + imgName)}) top left/contain no-repeat`}">
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return {
            imgName: "logo.png"
        }
    }
}
</script>