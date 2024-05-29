<template>
    <!-- NOTE: 컴포넌트
        [참고] https://v3-docs.vuejs-korea.org/guide/essentials/component-basics.html
        컴포넌트: UI를 독립적이고 재사용 가능한 일부분으로 분할하고 개별적으로 관리하는 것
        컴포넌트 관련 속성
            상위 컴포넌트
                - component   : 현재 템플릿에서 사용할 하위 컴포넌트를 명시한다.
                - v-slot      : 하위 컴포넌트의 name이 일치하는 slot 태그와 바인딩 시켜준다.
                    -★#이름   : v-slot 축약형
            하위 컴포넌트
                - prop        : 상위 컴포넌트에서 전달한 속성을 받아 ★데이터로 사용한다.
                - slot        : 상위 컴포넌트에서 하위 컴포넌트 안에 작성한 ★HTML 코드를 렌더링한다.
                - inheritAttrs: 속성 자동 맵핑을 원하지 않을 경우 false 로 설정한다.
        상속 요소가 자동 맵핑되지 않을 때 관련 속성
            하위 컴포넌트
                - inheritAttrs가 false 또는 하위 컴포넌트의 최상위 요소가 2개 이상일 때
                - $attrs   : 전달한 ★속성을 적용시킬 수 있다.
                - emits    : 전달한 이벤트 중 사용할 이벤트를 명시한다.
                - $emit    : 전달한 ★이벤트를 적용시킬 수 있다.
    -->
    <section>
        <h1>컴포넌트</h1>
        <h2>props</h2>
        <PropsBtn />
        <PropsBtn
            :color="123"
            err />
        <PropsBtn
            color="gray" />
        <PropsBtn
            :cnt="123" />
        <PropsBtn
            large />

        <h2>하위 컴포넌트의 최상위 요소가 2개 이상일 때</h2>
        <ul>
            <li>
                <h3>$attrs</h3>
                <AttrsBtn
                    class="btn"
                    style="font-weight: bold;" />
            </li>
            <li>
                <h3>Emit</h3>
                <EmitBtn
                    @click="log"
                    @some-event="log2"
                    @change-msg="logMsg">
                    Banana
                </EmitBtn>
            </li>
        </ul>

        <h2>slot</h2>
        <SlotBtn />
        <SlotBtn>
            Hi?
        </SlotBtn>
        <SlotBtn>
            <span style="color: #000;">Hi?</span>
        </SlotBtn>
        <SlotBtn>
            <!--
            <template v-slot:icon>
                <span>(B)</span>
            </template>
            -->
            <template #text>
                <span>Banana</span>
            </template>
            <template #icon>
                <span>(B)</span>
            </template>
        </SlotBtn>
    </section>
</template>

<script>
import PropsBtn from '~/components/sample/PropsBtn';
import SlotBtn from '~/components/sample/SlotBtn';
import AttrsBtn from '~/components/sample/AttrsBtn';
import EmitBtn from '~/components/sample/EmitBtn';

export default {
    //현재 컴포넌트에서 사용할 컴포넌트 명시
    components: {
        //PropsBtn: PropsBtn // (O)
        PropsBtn,            // (O)
        SlotBtn,
        AttrsBtn,
        EmitBtn,
    },
    methods: {
        log() {
            console.log('Click!');
        },
        log2(event) { // 매개변수는 하위 컴포넌트에서 전달한다.
            console.log('Click!2');
            console.log(event);
        },
        logMsg(msg) {
            console.log(msg);
        }
    }
}
</script>