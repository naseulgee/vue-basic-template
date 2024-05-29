<template>
    <!-- NOTE: 클래스 바인딩
        [참고] https://v3-docs.vuejs-korea.org/guide/essentials/class-and-style.html
        -★:class="{속성값: 조건}"
        - 속성을 동적으로 전환 시 사용한다.
        - 조건 값이 true 일 경우에만 속성이 적용된다.
        - data 나 computed 에 선언된 객체 데이터를 연결할 수 도 있다.
            - computed에 선언하는 것이 일반적이다.
        - 배열을 사용할 수도 있다.
    -->
    <section>
        <h1>Class 와 Inline-Style 동적 바인딩</h1>
        <h2>Class 동적 바인딩</h2>
        <ul>
            <li>
                <button
                    class="btn"
                    @click="active">
                    CLICK HERE! (add class)
                </button>
            </li>
            <li>
                <button
                    class="btn"
                    @click="error">
                    CLICK HERE! (add error)
                </button>
            </li>
            <li :class="{ active : isActive, 'text-danger': hasError }">
                Active?: {{ isActive }} | Error?: {{ hasError }}
            </li>
            <li :class="classObj">
                Active?: {{ isActive }} | Error?: {{ hasError }}
            </li>
            <li :class="[activeClass, errorClass]">
                Active && Error
            </li>
        </ul>

        <h2>인라인 스타일 동적 바인딩</h2>
        <ul>
            <li :style="{ color: activeColor, fontSize: fontSize + 'px' }">
                inline-style: {{ activeColor }}, {{ fontSize }}px
            </li>
            <li :style="fontStyle">
                inline-style: {{ fontStyle.color }}, {{ fontStyle.fontSize }}
            </li>
            <li :style="[fontStyle, bgStyle]">
                inline-style: {{ fontStyle.color }}, {{ fontStyle.fontSize }}, {{ bgStyle.backgroundColor }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    // 사용할 데이터 명시
    data() {
        return {
            attr: "class",
            classNm: "active",
            hTxt: "<span style='color: red;'>Hi</span>",
            msg: "Hello World",
            isActive: false,
            hasError: false,
            activeClass: 'active',
            errorClass: 'text-danger',
            activeColor: 'blue',
            fontSize: 20,
            fontStyle: {
                color: 'goldenrod',
                fontSize: '25px'
            },
            bgStyle: {
                backgroundColor: 'yellow'
            }
        }
    },
    // 계산하여 사용할 데이터 명시
    computed: {
        classObj() {
            return {
                active : this.isActive && !this.hasError,
                'text-danger': this.hasError
            }
        }
    },
    // 사용할 메서드 명시
    methods: {
        active() {
            this.isActive = !this.isActive
        },
        error() {
            this.hasError = !this.hasError
        }
    }
}
</script>

<style scoped lang="scss">
.active{
    color: yellowgreen;
}
.text-danger{
    font-weight: bold;
    &::after{
        content: "(!ERROR!)";
        color: red;
    }
}
</style>
