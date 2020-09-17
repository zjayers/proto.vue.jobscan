<template>
    <div :class="allCompleted ? '' : 'jx-cursor'">
        <div v-if="allCompleted">
            <p>All Complete</p>
        </div>
        <div v-else ref="jxJobBoardContainer">
            <job-board-item v-for="(site, index) in sites" :site="site" :index="index" :key="site.siteName"
                            @itemClicked="checkIfComplete" />
        </div>
    </div>
</template>

<script>
import JobBoardItem from "./JobBoardItem";
import { JobBoardDataMixin } from "../../mixins/JobBoardData";

export default {
    name: "JobBoard",
    components: { JobBoardItem },
    mixins: [JobBoardDataMixin],
    data() {
        return {
            allCompleted: false
        };
    },
    methods: {
        // TODO REFACTOR JOB BOARD TO USE VUEX
        checkIfComplete() {
            this.sites.shift();
            this.allCompleted = this.sites.length <= 0;
        }
    }
};
</script>

<style scoped lang="scss">
.jx-cursor {
    cursor: pointer;
}
</style>
