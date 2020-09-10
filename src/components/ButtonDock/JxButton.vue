<template>
    <b-button v-b-toggle="sidebarId" class="jx-dock-btn" variant="outline-primary">
        <b-icon :icon="icon"/>
        <p> {{ title }} </p>
    </b-button>
</template>

<script>
export default {
    name: "JxButton",
    props: ['icon', 'title', 'sidebarId']
}
</script>

<style lang="scss" scoped>
.jx-dock-btn {
    background: white;
    width: 120px;
}

p {
    margin: 0;
}
</style>
