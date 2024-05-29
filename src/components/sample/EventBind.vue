<template>
    <!-- NOTE: [참고] https://v3-docs.vuejs-korea.org/guide/essentials/event-handling.html
        v-on          : method 에 선언된 함수를 이벤트와 바인딩 시켜준다.
            -★@이벤트="함수명"       : v-on 생략 형태
            -★@[변수명]="함수명"     : 이벤트 부분 또한 동적으로 데이터를 전달받을 시 사용
            - @이벤트="함수명1(), ...": 한 이벤트에 여러 함수를 바인딩 할 수 있다.
        $event        : Event 객체를 전달한다.
            - 기본적으로 함수의 첫번째 인자로 Event 객체가 전달된다.
            - 함수의 인자를 명시 할 경우 Event 객체는 $event로 전달할 수 있다.
        이벤트 수식어  : 메서드 내에서 세부적인 처리 없이 간편하게 사용하는 v-on 속성 접미사
            -★.stop  : 이벤트 전파가 중지된다.
            -★.prevent: 기본 이벤트를 막는다.
            - .self   : event.target이 엘리먼트 자신일 경우에만 이벤트를 발생시킨다.
            - .capture: 내부 엘리먼트에서 클릭 이벤트 핸들러가 실행되기 전에, 여기에서 먼저 지정한 핸들러를 발생시킨다.
            - .once   : 이벤트를 한 번만 발생시킨다.
            - .passive: 기존 Event 와 로직을 분리하여 이벤트를 발생시킨다. prevent 설정 또한 무시하고 작동한다.
            - .exact  : 이벤트를 발생시킬 정확한 수식어의 조합을 제어한다.
            -★수식어는 연결하여 사용 가능하나 순서가 중요하다!
                - @click.prevent.self -> 앨리먼트 자체와 그 자식에 대한 클릭의 기본 동작을 방지
                - @click.self.prevent -> 앨리먼트 자체에 대한 클릭의 기본 동작만 방지
        입력키 수식어  : 키보드 이벤트 발생 시 특정 키를 감지하여 이벤트를 발생시킨다.
            - 기본적으로 KeyboardEvent.key를 통해 유효한 입력키 이름을 kebab-case로 변환하여 수식어로 사용한다.
            - .delete: Delete 키와 Backspace 모두 감지한다.
            - .esc   : Escape 키를 감지한다.
            - .space : Space 키를 감지한다.
            - .up    : ↑ 키를 감지한다.
            - .down  : ↓ 키를 감지한다.
            - .left  : ← 키를 감지한다.
            - .right : → 키를 감지한다.
            - .ctrl  : Ctrl 키를 감지한다.
            - .meta  : 윈도우키를 감지한다.
    -->
    <section>
        <h1>이벤트 바인딩</h1>
        <h2>이벤트 바인딩 기초</h2>
        <ul class="event">
            <li>
                <button
                    class="btn"
                    @click="increment">
                    CLICK HERE! (add count)
                </button>
            </li>
            <li>
                <button
                    class="btn"
                    @[event]="increment">
                    CLICK HERE! (add count)
                </button>
            </li>
            <li>
                {{ count }}
            </li>
            <li v-once>
                {{ count }}
            </li>
        </ul>

        <h2>Event 객체</h2>
        <ul>
            <li>
                <button
                    class="btn"
                    @click="greeting('hello', $event)">
                    CLICK HERE! (show alert)
                </button>
            </li>
        </ul>

        <h2>이벤트 수식어</h2>
        <ul>
            <li>
                <a
                    class="btn"
                    href="https://naver.com"
                    target="_blank"
                    @click="greeting('hello', $event)">
                    CLICK HERE! (go naver & show alert)
                </a>
            </li>
            <li>
                <a
                    class="btn"
                    href="https://naver.com"
                    target="_blank"
                    @click.prevent="greeting('hello', $event)">
                    CLICK HERE! (!go naver & show alert)
                </a>
            </li>
            <li>
                <a
                    class="btn"
                    href="https://naver.com"
                    target="_blank"
                    @click.once="greeting('hello', $event)">
                    CLICK HERE! (go naver & once show alert)
                </a>
            </li>
            <li class="stopEvent">
                <h3>이벤트 버블링</h3>
                <ul
                    class="parent"
                    @click="parentHandler">
                    <li
                        class="child"
                        @click="childHandler"></li>
                </ul>
                <h3>이벤트 버블링 방지</h3>
                <ul
                    class="parent"
                    @click="parentHandler">
                    <li
                        class="child"
                        @click.stop="childHandler"></li>
                </ul>
                <ul
                    class="parent"
                    @click.self="parentHandler">
                    <li
                        class="child"
                        @click="childHandler"></li>
                </ul>
            </li>
            <li>
                <h3>이벤트 수식어 조합 제어</h3>
                <button
                    class="btn"
                    @click.exact="greeting('hello', $event)">
                    CLICK HERE! (only click!)
                </button>
            </li>
        </ul>

        <h2>입력키 수식어</h2>
        <ul>
            <li>
                Message: {{ msg }}
            </li>
            <li>
                <input
                    type="text"
                    @keyup="keyEvent($event, $event.key)" />
                (Show the key what you press last)
            </li>
            <li>
                <input
                    type="text"
                    @keyup.enter="keyEvent($event, $event.target.value)" />
                (Press Enter)
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    // 사용할 데이터 명시
    data() {
        return {
            count: 0,
            event: "click",
            msg: "",
        }
    },
    // 사용할 메서드 명시
    methods: {
        increment() {
            // data에 명시한 데이터 지정
            this.count++
        },
        greeting(message, event) {
            console.log(message, event);
            alert(message)
        },
        parentHandler(){
            console.log('parentHandler');
        },
        childHandler(){
            console.log('childHandler');
        },
        keyEvent(event, eventData){
            console.log(event, eventData);
            this.msg = eventData;
        },
    },
}
</script>

<style scoped lang="scss">
ul{
    &.event{
        color: royalblue;
    }
    .stopEvent{
        .parent{
            display: block;
            width: 200px;
            height: 100px;
            padding: 20px;
            box-sizing: border-box;
            background-color: royalblue;
            .child{
                display: block;
                width: 50%;
                height: 100%;
                background-color: orange;
            }
        }
    }
}
a{
    text-decoration: none;
}
</style>