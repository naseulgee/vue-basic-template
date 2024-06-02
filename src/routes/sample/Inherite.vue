<template>
    <ComponentEx />

    <ProvideEx />

    <Refs />
</template>

<script>
import ComponentEx from '~/components/sample/ComponentEx';
import ProvideEx from '~/components/sample/ProvideEx';
import Refs from '~/components/sample/Refs';

export default {
    components: {
        ComponentEx,
        ProvideEx,
        Refs,
    },
}
</script>