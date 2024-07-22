/** NOTE: 레이아웃을 이용한 샘플용 페이지 정의
 * 해당 파일은 /src/routers/index.js 에 import 되어 사용된다.
*/
import SampleLayout from '~/layouts/SampleLayout'
import Bind from '~/views/sample/Bind';
import LifeCycleWatch from '~/views/sample/LifeCycleWatch';
import Inherite from '~/views/sample/Inherite';
import OptionAndComposition from '~/views/sample/OptionAndComposition';
import Directive from '~/components/sample/Directive';

export default [
    {
        path: '/layout',
        // component: Sample,
        meta: { layout: SampleLayout, }, // RouterView 에 부모 컴포넌트 대신 레이아웃을 지정 ( App.vue > /layouts/SampleLayout.vue > RouterView )
        children: [
            {
                path: '',
                redirect: '/layout/bind'
            },
            {
                path: 'bind',
                component: Bind // slot 부분에 전달될 컴포넌트 ( /layouts/SampleLayout.vue > slot )
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
    }
]