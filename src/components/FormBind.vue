<template>
    <!-- NOTE:
        [참고] https://v3-docs.vuejs-korea.org/guide/essentials/forms.html
        [참고] https://v3-docs.vuejs-korea.org/guide/components/v-model.html
        단방향 바인딩: 값을 조회만 하거나, 저장만 하는 경우
      ★양방향 바인딩: 값을 조회, 저장을 동시에하는 경우
        - :value="변수명" @input="변수명 = $event.target.value"
        - v-model: 양방향 바인딩을 간편하게 지원하는 수식어
            -★단, 한글의 경우 입력한 내용이 바로 반영되지 않아 v-model 대신 이벤트 리스너를 직접 구현해야 한다.
        - v-model 수식어
            - .lazy: 입력이 완료 되고 focusout 되었을 때 바인딩 시킨다. (input의 @change 이벤트와 동일)
            - .num : 연결한 input의 type이 text 여도, 입력된 데이터가 number 타입임을 유지시킨다.
            - .trim: 입력된 데이터의 앞, 뒤 공백을 제거한다.
    -->
    <section>
        <h1>Form 바인딩</h1>
        <h2>단/양 방향 바인딩</h2>
        <ul>
            <li>
                {{ msg }}
            </li>
            <li>
                단방향:
                <input
                    type="text"
                    :value="msg"
                    placeholder="Hello" />
            </li>
            <li>
                양방향:
                <input
                    type="text"
                    :value="msg"
                    @input="msg = $event.target.value"
                    placeholder="Hello" />
            </li>
        </ul>

        <h2>v-model</h2>
        <ul>
            <li>
                <input
                    type="text"
                    v-model="msg"
                    placeholder="Hello" />
                <input
                    type="checkbox"
                    v-model="checked" />
                {{ checked }}
            </li>
        </ul>

        <h2>input event와 v-model 수식어</h2>
        <ul>
            <li>
                <input
                    type="text"
                    :value="msg"
                    @change="msg = $event.target.value"
                    placeholder="Hello" />
                | 
                <input
                    type="text"
                    v-model.lazy="msg"
                    placeholder="Hello" />
            </li>
            <li>
                <input
                    type="text"
                    v-model.trim="msg" />
            </li>
            <li>
                <input
                    type="number"
                    v-model="num" />
                | 
                <input
                    type="text"
                    v-model="num" />
                | 
                <input
                    type="text"
                    v-model.number="num" />
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return {
            msg: "Hello!",
            num: 123,
            checked: false,
        }
    },
    watch: {
        num: function(val){
            console.log(val);
        }
    }
}
</script>