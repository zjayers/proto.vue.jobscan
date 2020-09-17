<template>
    <div :class="getAllComplete ? '' : 'jx-cursor'">
        <div v-if="getAllComplete">
            <p>All Complete</p>
        </div>
        <div v-else ref="jxJobBoardContainer">
            <job-board-item v-for="(site, index) in getSites" :site="site" :index="index" :key="site.siteName" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import JobBoardItem from "./JobBoardItem";

export default {
    name: "JobBoard",
    components: { JobBoardItem },
    computed: mapGetters(["getSites", "getAllComplete"])
};
</script>

<style scoped lang="scss">
.jx-cursor {
    cursor: pointer;
}
</style>
