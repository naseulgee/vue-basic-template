<template>
    <!-- NOTE: Provide/Inject
        [참고] https://v3-docs.vuejs-korea.org/guide/components/provide-inject.html
        - provide: 자손 컴포넌트에게 바로 데이터를 전달하기 위해 사용한다.
            - ★반응성을 갖기 위해 computed 사용하여 명시한다.
        - inject : 조상 컴포넌트에게 바로 데이터를 전달 받기 위해 사용한다.
            - provide 에 명시한 데이터명을 명시한다.
            -★일반적: ['변수명', ...]
            - 기본값: { 사용변수명: { from: '전달받은 변수명', default: '기본 값' } }
    -->
    <section>
        <h1>Provide, Inject</h1>
        <p>
            <button
                class="btn"
                @:click="message = 'Good'">
                Click
            </button>
            {{ message }}
        </p>
        <ProvideExEmpty :msg="message" />
    </section>
</template>

<script>
import ProvideExEmpty from '~/components/sample/ProvideExEmpty';
import { computed } from 'vue';

export default {
    components: {
        ProvideExEmpty,
    },
    data() {
        return {
            message: 'Hello Provide!'
        }
    },
    // 자손 컴포넌트에 전달할 데이터를 명시
    provide(){
        return {
            // msg: this.message
            msg: computed(() => this.message) // ★반응성을 갖기 위해 computed 사용
        }
    },
}
</script>