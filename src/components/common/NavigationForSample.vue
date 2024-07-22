<template>
    <!-- NOTE: RouterLink
        [참고] https://router.vuejs.kr/guide/essentials/active-links.html
        to          : 라우터 설정(/src/routes/index.js)에 선언된 페이지 중 path 와 일치하는 페이지로 이동시킨다
        from        : 현재 페이지
        active-class: 클릭시 활성화되는 클래스를 지정한다.
            기본값: router-link-active
    -->
    <nav>
        <ul class="nav nav-tabs">
            <li
                class="nav-item"
                v-for="navigation in navigations"
                :key="navigation.name">
                <RouterLink
                    class="nav-link"
                    active-class="active"
                    v-if="navigation.name != null"
                    :to="navigation.href">
                    {{ navigation.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import sampleRouter from "~/routes/sampleRouter.js"
export default {
    data() {
        return {
        }
    },
    computed: {
        navigations() {
            return sampleRouter[0].children.map((route, i) => {
                const obj = { name: null, href: null }
                const path = route.path
                if(i != 0) {
                    obj.name = path.charAt(0).toUpperCase() + path.slice(1).replace("-and-", " & "),
                    obj.href = path
                }
                return obj
            })
        }
    },
}
</script>