<template>
    <BasicBind />

    <Computed />
    
    <EventBind />

    <ClassBind />

    <FormBind />
</template>

<script>
import BasicBind from '~/components/sample/BasicBind';
import Computed from '~/components/sample/Computed';
import EventBind from '~/components/sample/EventBind';
import ClassBind from '~/components/sample/ClassBind';
import FormBind from '~/components/sample/FormBind';

export default {
    components: {
        BasicBind,
        Computed,
        EventBind,
        ClassBind,
        FormBind,
    },
}
</script>