<template>
    <ComponentEx />

    <ProvideEx />

    <Refs />

    <StoreSearch />
    <StoreList />
</template>

<script>
import ComponentEx from '~/components/sample/ComponentEx';
import ProvideEx from '~/components/sample/ProvideEx';
import Refs from '~/components/sample/Refs';
import StoreSearch from '~/components/sample/StoreSearch';
import StoreList from '~/components/sample/StoreList';

export default {
    components: {
        ComponentEx,
        ProvideEx,
        Refs,
        StoreSearch,
        StoreList,
    },
}
</script>