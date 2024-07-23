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

export default {
    computed: {
        movies() {
            return this.$store.state.sampleStore.movies
        },
        message() {
            return this.$store.state.sampleStore.message
        }
    },
}
</script>