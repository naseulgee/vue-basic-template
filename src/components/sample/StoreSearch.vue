<template>
    <section>
        <h1>Store for Search</h1>
        <form>
            <input
                type="text"
                v-model="title" 
                placeholder="영화 제목을 입력하세요."
                @keyup.enter="search" />
            <select
                v-for="filter in filters"
                :key="filter.name"
                v-model="$data[filter.name]"
                :aria-label="filter.name">
                <option
                    v-if="filter.name === 'year'"
                    value="">
                    All
                </option>
                <option
                    v-for="item in filter.items"
                    :key="item">
                    {{ item }}
                </option>
            </select>
            <button
                class="btn btn-primary"
                type="submit"
                @click="search">
                Search
            </button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: "frozen",
            type: "movie",
            maxCnt: 10,
            year: "",
            filters: [
                {
                    name: "type",
                    items: ["movie", "series", "episode"],
                },
                {
                    name: "maxCnt",
                    items: [10, 20, 30],
                },
                {
                    name: "year",
                    items: (() => {
                        const years = [];
                        const currentYear = new Date().getFullYear(); // 올해 연도
                        for (let i = currentYear; i >= 1900; i--) {
                            years.push(i);
                        }
                        return years;
                    })(),
                },
            ]
        }
    },
    methods: {
        async search() {
            this.$store.dispatch('sampleStore/searchMovies', {
                title:  this.title,
                type:   this.type,
                year:   this.year,
                maxCnt: this.maxCnt,
            })
        }
    },
}
</script>