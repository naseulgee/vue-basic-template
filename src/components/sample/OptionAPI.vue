<template>
    <!-- NOTE: 템플릿 부분은 동일하다 -->
    <section>
        <h1>옵션 API(일반적)</h1>
        <ul>
            <li>
                Count: {{ count }}
            </li>
            <li>
                Duble: {{ doubleCount }}
            </li>
            <li>
                <button
                    class="btn"
                    @click="increase">
                    Click
                </button>
            </li>
        </ul>
        <ul>
            <li>
                Message: {{ message }}
            </li>
            <li>
                Reverse: {{ reverseMessage }}
            </li>
            <li>
                <button
                    class="btn"
                    @click="changeMessage">
                    Click Change
                </button>
            </li>
            <li>
                <button
                    :class="$attrs.class"
                    :style="{ color: color }"
                    @click="hello">
                    <slot></slot>
                </button>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        color: {
            type: String,
            default: "#000"
        }
    },
    emits: ["hello"],
    data(){
        return {
            count: 0,
            message: "Hi Composition API",
        }
    },
    computed: {
        doubleCount() {
            return this.count * 2
        },
        reverseMessage() {
            return this.message.split("").reverse().join("")
        },
    },
    methods: {
        increase() {
            this.count++
        },
        changeMessage() {
            this.message = "Good"
        },
        hello() {
            this.$emit("hello")
        }
    },
    watch: {
        count(newValue) {
            console.log("[옵션API] watch:: change count: ", newValue)
        },
        message(newValue) {
            console.log("[옵션API] watch:: change message: ", newValue)
        }
    },
    created() {
        console.log("[옵션API] created:: ", this.count, this.message)
    },
    mounted() {
        console.log("[옵션API] mounted:: ", this.count, this.message)
        console.log("[옵션API] mounted:: ", this.color, this.$attrs)
    },
}
</script>