<template>
    <section>
        <h1>조건/반복</h1>
        <ul>
            <li v-if="fruits.length > 0">
                <ul>
                    <Fruit
                        v-for="fruit in fruits"
                        :key="fruit"
                        :name="fruit">
                        {{ fruit }}
                    </Fruit>
                </ul>
            </li>
            <li v-if="hasFruit">
                <ul>
                    <Fruit
                        v-for="fruit in reverseFruit"
                        :key="fruit"
                        :name="fruit">
                        {{ fruit }}
                    </Fruit>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
import Fruit from '~/components/Fruit';

export default {
    //현재 컴포넌트에서 사용할 컴포넌트 명시
    components: {
        Fruit,
    },
    // 사용할 데이터 명시
    data() {
        return {
            fruits: ["Apple", "Banana", "Orange"],
        }
    },
    // 계산하여 사용할 데이터 명시
    computed: {
        hasFruit(){
            return this.fruits.length > 0
        },
        reverseFruit(){
            return this.fruits.map(fruit => {
                // 'Apple' => ['A', 'p', 'p', 'l', 'e'] => ['e', 'l', 'p', 'p', 'A'] => 'elppA'
                return fruit.split("").reverse().join("")
            })
        },
    },
}
</script>