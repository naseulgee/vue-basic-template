<template>
    <!-- NOTE: RouterLink
        [참고] https://router.vuejs.kr/guide/essentials/active-links.html
        to: 라우터 설정(/src/routes/index.js)에 선언된 페이지 중 path 와 일치하는 페이지로 이동시킨다
        active-class: 클릭시 활성화되는 클래스를 지정한다.
            기본값: router-link-active
    -->
    <nav>
        <ul class="nav nav-pills">
            <li
                class="nav-item"
                v-for="navigation in navigations"
                :key="navigation.name">
                <RouterLink
                    class="nav-link"
                    active-class="active"
                    :to="navigation.href">
                    {{ navigation.name }}
                </RouterLink>
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
                }
            ]
        }
    }
}
</script>