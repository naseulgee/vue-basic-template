<template>
    <LifeCycleHook />

    <Watch />
</template>

<script>
import LifeCycleHook from '~/components/sample/LifeCycleHook';
import Watch from '~/components/sample/Watch';

export default {
    components: {
        LifeCycleHook,
        Watch,
    },
}
</script>