<template>
    <b-sidebar :id="id"
               :title="title"
               backdrop
               class="jx-sidebar"
               shadow="lg"
               width="350px">
        <div class="px-3 py-2">
            <slot></slot>
        </div>
    </b-sidebar>
</template>

<script>
export default {
    name: "SideBar",
    props: ['id', 'title']
}
</script>

<style lang="scss" scoped>
.jx-sidebar {
    z-index: 99999;
    width: 300px;
}
</style>
