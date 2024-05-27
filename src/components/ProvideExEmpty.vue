<template>
    <ul>
        <li>
            <ProvideExProps :msg="msg" />
        </li>
        <li>
            <ProvideExInject />
        </li>
    </ul>
</template>

<script>
import ProvideExInject from '~/components/ProvideExInject';
import ProvideExProps from '~/components/ProvideExProps';

export default {
    components: {
        ProvideExInject,
        ProvideExProps,
    },
    // inject 사용 시 필요 없어짐
    props: {
        msg: {
            type: String,
            defualt: "",
        }
    }
}
</script>