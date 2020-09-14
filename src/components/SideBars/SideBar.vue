<template>
    <transition name="fade">
        <div v-show="getSideBarVisible" class="jx-sidebar-container">
            <transition name="collapse">
                <div v-if="getSideBarVisible" class="jx-sidebar-content">
                    <component class="jx-fixed-container" :is="sideBarContent"></component>
                </div>
            </transition>
            <div class="jx-sidebar-overlay" @click="toggleSideBarVisible"></div>
        </div>
    </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { SIDEBAR_JOB_BOARD, SIDEBAR_METRICS, SIDEBAR_PERSONAL, SIDEBAR_TEMPLATES } from "../../constants/constants";
import Personal from "./Personal/Personal";
import Metrics from "./Metrics/Metrics";
import JobBoard from "./JobBoard/JobBoard";
import Templates from "./Templates/Templates";

export default {
    name: "SideBar",
    components: { Personal, Metrics, JobBoard, Templates },
    data: () => ({
        SIDEBAR_JOB_BOARD,
        SIDEBAR_METRICS,
        SIDEBAR_PERSONAL,
        SIDEBAR_TEMPLATES
    }),
    props: ["id", "title"],
    computed: {
        ...mapGetters(["getSideBarVisible", "getSideBarId"]),
        sideBarContent() {
            switch (this.getSideBarId) {
                case SIDEBAR_PERSONAL:
                    return "Personal";
                case SIDEBAR_JOB_BOARD:
                    return "JobBoard";
                case SIDEBAR_TEMPLATES:
                    return "Templates";
                case SIDEBAR_METRICS:
                    return "Metrics";
                default:
                    return "";
            }
        }
    },
    methods: {
        ...mapActions(["toggleSideBarVisible"])
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/theme";

$sidebar-base: 340;
$sidebar-width: $sidebar-base + px;
$sidebar-interior: $sidebar-base - 120 + px;

.jx-sidebar-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    margin: 0;
    left: 0;
    top: 0;
    display: flex;
    pointer-events: all;
    z-index: 1001 !important;
}

.jx-sidebar-content {
    width: $sidebar-width;
    height: 100vh;
    background: $gray-100;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    padding: 10px;
    overflow-y: scroll;
    z-index: 1001 !important;
    padding-left: 15px;
}

.jx-sidebar-overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1001 !important;
}

.jx-fixed-container {
    width: $sidebar-interior;
    height: 100%;
    margin: 0;
}

.collapse-enter-active,
.collapse-leave-active {
    transition: width 0.5s;
}

.collapse-enter,
.collapse-leave-to {
    width: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
