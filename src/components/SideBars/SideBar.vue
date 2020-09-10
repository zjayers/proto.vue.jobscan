<template>
    <div :id="id" :title="title">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
    props: ['id', 'title']
}
</script>

<style lang="scss" scoped>

</style>
