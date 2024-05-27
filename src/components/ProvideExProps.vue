<template>
    With Props: {{ msg }}
</template>

<script>

export default {
    props: {
        msg: {
            type: String,
            defualt: "",
        }
    }
}
</script>