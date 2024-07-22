<template>
    <BasicBind />

    <ImgBind />

    <Computed />
    
    <EventBind />

    <ClassBind />

    <FormBind />
</template>

<script>
import BasicBind from '~/components/sample/BasicBind';
import ImgBind from '~/components/sample/ImgBind.vue';
import Computed from '~/components/sample/Computed';
import EventBind from '~/components/sample/EventBind';
import ClassBind from '~/components/sample/ClassBind';
import FormBind from '~/components/sample/FormBind';

export default {
    components: {
        BasicBind,
        ImgBind,
        Computed,
        EventBind,
        ClassBind,
        FormBind,
    },
}
</script>