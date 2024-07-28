<template>
    <section>
        <h1>Store for Result</h1>
        <ul>
            <li class="message">
                {{ message }}
            </li>
            <li
                v-for="movie in movies"
                :key="movie.imdbID">
                <RouterLink
                    :to="`/dynamic-path/${movie.imdbID}`">
                    {{ movie.Title }}
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        /** NOTE: Vuex Helpers
         * [참고 state    ] https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
         * [참고 getters  ] https://vuex.vuejs.org/guide/getters.html#the-mapgetters-helper
         * [참고 mutations] https://vuex.vuejs.org/guide/mutations.html#committing-mutations-in-components
         * [참고 actions  ] https://vuex.vuejs.org/guide/actions.html#dispatching-actions-in-components
         * 
         * store 에 등록된 데이터 및 함수들을 반복 사용 시 편하게 등록을 도와주는 함수
         * 
         * Helpers 종류
         *  - mapState    , mapGetters: computed 영역에서 사용된다.
         *     ★- mapState 가 가장 자주 사용되는 편이다.
         *  - mapMutations, mapActions: methods 영역에서 사용된다.
         *      - 어디에서 참조되는 함수인지 헷갈리기 때문에 Helper들 보다 직접 호출이 선호된다.
         * 
         * Helpers 사용
         *  - ...Helpers('store 별칭', [ 호출할 변수 또는 함수명1, ... ])
         */
         ...mapState('sampleStore', [
            'movies',
            'message',
        ]),
        // movies() {
        //     return this.$store.state.sampleStore.movies
        // },
        // message() {
        //     return this.$store.state.sampleStore.message
        // }
    },
}
</script>