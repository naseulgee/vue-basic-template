<template>
    <!-- NOTE: 템플릿 참조
        [참고] https://v3-docs.vuejs-korea.org/guide/essentials/template-refs.html
        - id, class와 같이 특정 요소나 컴포넌트를 참조할 수 있음
        - 컴포넌트가 DOM에 연결된 후에 사용할 수 있기 때문에 created() 내에선 사용이 불가하다.
        - 선언: ref="참조명"
        - 사용:
            - this.$refs.참조명                : 일반 요소
            - this.$refs.참조명.$el            : 컴포넌트 요소
            - this.$refs.참조명.$refs.하위참조명: 컴포넌트의 상위요소가 두개 이상일 때 사용
    -->
    <section>
        <h1>참조</h1>
        <ul>
            <li ref="refEl">
                Hi
            </li>
            <RefComponent
                ref="banana"
                name="Banana" />
            <li>
                <ManyChildsComponet
                    ref="btns"
                    class="btn"
                    style="color: green" />
            </li>
        </ul>
    </section>
</template>

<script>
import RefComponent from '~/components/sample/Fruit'
import ManyChildsComponet from '~/components/sample/AttrsBtn'

export default {
    components: {
        RefComponent,
        ManyChildsComponet,
    },
    created() {
        console.log(this.$refs.refEl) // undefined
    },
    mounted() {
        console.log(this.$refs.refEl)          // 일반 요소
        console.log(this.$refs.banana.$el)     // 컴포넌트 요소
        console.log(this.$refs.btns.$refs.btn) // 컴포넌트의 상위요소가 두개 이상일 때 사용
    },
}
</script>