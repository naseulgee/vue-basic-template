/** NOTE: 샘플용 페이지 정의
 * 해당 파일은 /src/routers/index.js 에 import 되어 사용된다.
*/
import Sample from '~/views/sample/Sample'
import Bind from '~/views/sample/Bind';
import LifeCycleWatch from '~/views/sample/LifeCycleWatch';
import Inherite from '~/views/sample/Inherite';
import OptionAndComposition from '~/views/sample/OptionAndComposition';
import Directive from '~/components/sample/Directive';

export default [
    {
        path: '/sample',
        component: Sample, // 부모 RouterView 에 컴포넌트 전달 ( App.vue > RouterView > /layouts/BasicLayout.vue )
        children: [
            {
                path: '', // /sample 접속 시
                redirect: '/sample/bind'
            },
            {
                path: 'bind',
                component: Bind // 자식 RouterView 에 컴포넌트 전달 ( /layouts/BasicLayout.vue > /views/Sample.vue > RouterView )
            },
            {
                path: 'lifecycle-and-watch',
                component: LifeCycleWatch
            },
            {
                path: 'directive',
                component: Directive
            },
            {
                path: 'inherite',
                component: Inherite
            },
            {
                path: 'option-and-composition',
                component: OptionAndComposition
            },
        ]
    },
]