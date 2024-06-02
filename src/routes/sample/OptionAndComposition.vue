<template>
    <OptionAPI
        class="btn"
        style="font-size: 1.5em; font-weight: bold;"
        color="royalblue"
        @hello="console.log('Hello OptionAPI')">
        Option API
    </OptionAPI>
    <CompositionAPI
        class="btn"
        style="font-size: 1.5em; font-weight: bold;"
        color="royalblue"
        @hello="console.log('Hello CompositionAPI')">
        Composition API
    </CompositionAPI>
</template>

<script>
import CompositionAPI from '~/components/sample/CompositionAPI';
import OptionAPI from '~/components/sample/OptionAPI';

export default {
    components: {
        CompositionAPI,
        OptionAPI,
    },
}
</script>