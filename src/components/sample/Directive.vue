<template>
    <!-- NOTE: 디랙티브
        [참고] https://v3-docs.vuejs-korea.org/guide/essentials/conditional.html
        [참고] https://v3-docs.vuejs-korea.org/guide/essentials/list.html
        조건: v-if / v-else-if / v-else, v-show
            - v-else-if 와 v-else 의 경우 v-if 바로 다음에 와야 인식된다.
            - v-if 의 경우 렌더링 작업을, v-show 의 경우 렌더링 후 스타일 작업을 한다.
                - 즉, v-if 는 전환 비용이, v-show 는 초기 비용이 높다.
        반복: v-for
            - :key 라는 속성으로 반복 객체의 고유값을 선언해줘야 한다

        ★v-if 와 v-for를 하나의 DOM 요소에 함께 사용하는 것은 권장되지 않는다.
            - 만약 함께 사용하게 되는 경우 v-if > v-for 순으로 판별 된다.
            - 하위 DOM 요소를 두어 나눠 명시하는 것을 권장한다.
    -->
    <section>
        <h1>조건/반복</h1>
        <h2>조건</h2>
        <ul>
            <li>
                <button
                    class="btn"
                    @click="add">
                    CLICK HERE! (add count)
                </button>
            </li>
            <li>
                count: {{ count }}
            </li>
            <li v-if="count == 0">
                시작
            </li>
            <li v-else-if="count > 5">
                5보다 크다
            </li>
            <li v-else>
                {{ count }} 이다
            </li>
            <li v-show="count > 10">
                10보다 크다
            </li>
        </ul>

        <h2>반복</h2>
        <ul>
            <li>
                <h3>for-in</h3>
                <span
                    v-for="fruit in fruits"
                    :key="fruit">
                    {{ fruit }} , 
                </span>
            </li>
            <li>
                <h3>for-in (with index)</h3>
                <span
                    v-for="(fruit, idx) in fruits"
                    :key="idx">
                    ({{ idx }}) {{ fruit }} , 
                </span>
            </li>
            <li>
                <h3>for-of</h3>
                <span
                    v-for="fruit of fruits"
                    :key="fruit">
                    {{ fruit }} , 
                </span>
            </li>
            <li>
                <h3>for-of (with index)</h3>
                <span
                    v-for="(fruit, idx) of fruits"
                    :key="idx">
                    ({{ idx }}) {{ fruit }} , 
                </span>
            </li>
            <li>
                <h3>for-of 1 (with index)</h3>
                <h4>for-of 2 (with index, key, value)</h4>
                <div
                    v-for="(fruit, idx) of newFruits"
                    :key="idx">
                    ({{ idx }}) {{ fruit }}
                    <ul>
                        <li
                            v-for="(value, key, i) of fruit"
                            :key="value.id">
                            ({{ i }}), {{ key }} : {{ value }}
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <button
                    class="btn"
                    @click="pushFruit">
                    CLICK HERE! (add fruit)
                </button>
            </li>
        </ul>

        <h2>조건 & 반복</h2>
        <ul>
            <template v-if="fruits.length > 0">
                <Fruit
                    v-for="fruit in fruits"
                    :key="fruit"
                    :name="fruit">
                    {{ fruit }}
                </Fruit>
            </template>
        </ul>
        <ul>
            <template v-if="hasFruit">
                <Fruit
                    v-for="fruit in reverseFruit"
                    :key="fruit"
                    :name="fruit">
                    {{ fruit }}
                </Fruit>
            </template>
        </ul>
    </section>
</template>

<script>
import Fruit from '~/components/sample/Fruit';
import shortid from 'shortid';

export default {
    //현재 컴포넌트에서 사용할 컴포넌트 명시
    components: {
        Fruit,
    },
    // 사용할 데이터 명시
    data() {
        return {
            fruits: ["Apple", "Banana", "Cherry"],
            count: 0,
        }
    },
    // 사용할 메서드 명시
    methods: {
        add(){
            this.count++
        },
        pushFruit(){
            this.fruits.push("Orange")
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
        newFruits(){
            return [...this.fruits].map((fruit, index) => {
                return {
                    id: shortid.generate(), // 고유값 생성
                    idx: index,
                    name: fruit
                }
            })
        }
    },
}
</script>