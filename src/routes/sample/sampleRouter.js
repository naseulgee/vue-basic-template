/** NOTE: 샘플용 페이지 정의
 * 해당 파일은 /src/routers/index.js 에 import 되어 사용된다.
*/
import Sample from './Sample'
import Bind from './Bind';
import LifeCycleWatch from './LifeCycleWatch';
import Inherite from './Inherite';
import OptionAndComposition from './OptionAndComposition';
import Directive from '~/components/sample/Directive';

export default [
    {
        path: '/sample',
        component: Sample,
        children: [
            {
                path: '', // /sample 접속 시
                redirect: '/sample/bind'
            },
            {
                path: 'bind',
                component: Bind
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