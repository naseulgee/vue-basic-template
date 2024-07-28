<template>
    <!-- NOTE: RouterLink
        [참고] https://router.vuejs.kr/guide/essentials/active-links.html
        to          : 라우터 설정(/src/routes/index.js)에 선언된 페이지 중 path 와 일치하는 페이지로 이동시킨다
        from        : 현재 페이지
        active-class: 클릭시 활성화되는 클래스를 지정한다.
            기본값: router-link-active
    -->
    <nav>
        <ul class="nav nav-pills nav-fill justify-content-center">
            <li
                class="nav-item"
                v-for="navigation in navigations"
                :key="navigation.name">
                <!-- isMatch 의 값이 true 면 active 클래스가 추가된다 -->
                <RouterLink
                    :class="['nav-link', { active: isMatch(navigation.path) }]"
                    active-class="active"
                    :to="navigation.href">
                    {{ navigation.name }}
                </RouterLink>
            </li>
        </ul>
        <!-- NOTE: RouterLink 가 아닌 method를 활용한 이동
            페이지 이동 전 추가 로직을 구동시킬 수 있다.
            ★$router 객체가 가진 메소드를 이용하여 이동한다.
        -->
        <ul class="btn-wrap m-4 p-0 position-fixed end-0 bottom-0">
            <li>
                <button
                    class="btn btn-outline-primary text-uppercase"
                    @click="toBack">
                    Go back
                    <font-awesome-icon icon="fa-solid fa-reply" />
                </button>
            </li>
            <li class="mt-2">
                <button
                    class="btn btn-primary text-uppercase"
                    @click="toHome">
                    Go home
                    <font-awesome-icon icon="fa-solid fa-hand-point-right" />
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navigations: [
                {
                    name: "Home",
                    href: "/"
                },
                {
                    name: "Sample",
                    href: "/sample"
                },
                {
                    name: "Dynamic path",
                    href: "/dynamic-path/tt4520988", // 기본 경로
                    path: /^\/dynamic-path/, // /dynamic-path 로 시작하는 경로를 모두 일치시킴
                },
            ]
        }
    },
    methods: {
        isMatch(path) { // 정규표현식을 인자로 전달 받는다
            if(!path) return false
            return path.test(this.$route.fullPath) // 정규표현식의 test 함수를 사용하여 포함여부 반환
        },
        // method를 활용한 이동
        toBack() {
            this.$router.back()
        },
        toHome() {
            this.$router.push('/')
        },
    }
}
</script>