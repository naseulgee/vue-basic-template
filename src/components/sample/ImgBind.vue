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
                <img src="~/assets/images/common/logo.png" />
            </li>
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

        <h2>Loading 과 이미지</h2>
        <ul>
            <li>
                <Loader
                    v-if="imageLoading"
                    :size="3" />
                <img
                    v-if="noImage"
                    src="~/assets/images/common/404-img.jpg"
                    alt="No Poster" />
                <img
                    v-else
                    :src="reqLoadImage(loadinImgName)" />
            </li>
        </ul>
    </section>
</template>

<script>
import Loader from '~/components/common/Loader'
export default {
    components: {
        Loader,
    },
    data(){
        return {
            imgName: "logo.png",
            loadinImgName: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg",
            imageLoading: true,
            noImage: false,
        }
    },
    methods: {
        // async await 를 이용한 방법
        async init(){
            const src = this.loadinImgName

            try {
                // 메모리상 이미지가 로딩이 완료될 때 까지 대기
                await this.$loadImage(src)
            } catch (error) { // 이미지가 없는 경우 예외처리
                console.error(error)
                this.noImage = true
            } finally {
                this.imageLoading = false // 로딩 종료
            }
        },
        /** NOTE: then 을 이용한 방법
         * 이미지 로딩 여부와 관련 없이 src 값이 반환되어야 함으로,
         * await 가 아닌 then 을 사용하여 별개의 로직으로 실행시켜야 한다.
        */
        reqLoadImage(url){
            this.$loadImage(url)
                .then(() => { // 메모리상 이미지가 로딩이 완료될 때 까지 대기 후
                })
                .catch(error => { // 이미지가 없는 경우 예외처리
                    console.error(error)
                    this.noImage = true
                })
                .finally(() => {
                    this.imageLoading = false // 로딩 종료
                })
            return url // 대기와 상관 없이 사이즈 변환 주소 리턴
        }
    },
    mounted(){ // HTML 구조와 컴포넌트 연결 직후 바로 실행 (created는 DOM과 연결되지 않은 상태)
        // this.init()
    },
}
</script>