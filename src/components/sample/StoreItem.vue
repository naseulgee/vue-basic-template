<template>
    <section>
        <h1>Movie info</h1>
        <ul>
            <li
                v-for="(value, key) in theMovie"
                :key="key">
                <strong class="fs-3">{{ key }}</strong>
                : {{ value }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        theMovie(){
            return this.$store.state.sampleStore.theMovie
        }
    },
    created(){
        this.$store.dispatch('sampleStore/searchMovieWithId', {
            id : this.$route.params.id // routes/index.js 에서 설정한 콜론(:) 뒤 동적 파라미터 변수명
        })
        console.log("created:::::", this.$store.state.sampleStore.theMovie)
    }
}
</script>