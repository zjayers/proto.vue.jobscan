<template>
    <b-sidebar :id="id"
               :title="title"
               backdrop
               class="jx-sidebar"
               no-header
               shadow="lg">
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

<style scoped>
.jx-sidebar {
    z-index: 99999;
}
</style>
