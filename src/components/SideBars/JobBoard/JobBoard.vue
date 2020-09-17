<template>
    <div :class="getAllComplete ? '' : 'jx-cursor'">
        <transition name="award">
            <div v-show="getAllComplete" class="jx-icon-container">
                <icon-award class="jx-icon-award" />
                <h3>Congratulations! You've applied to all of your job boards for the day!</h3>
            </div>
        </transition>
        <div v-show="!getAllComplete" ref="jxJobBoardContainer">
            <job-board-item v-for="(site, index) in getSites" :key="site.siteName" :index="index" :site="site" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import JobBoardItem from "./JobBoardItem";
import IconAward from "../../../assets/Icons/IconAward";

export default {
    name: "JobBoard",
    components: { IconAward, JobBoardItem },
    computed: mapGetters(["getSites", "getAllComplete"])
};
</script>

<style lang="scss" scoped>
.jx-cursor {
    cursor: pointer;
}

.jx-icon-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h3 {
        text-align: center;
    }
}

.jx-icon-award {
    width: 80%;
    height: auto;
}

.award-enter-active,
.award-leave-active {
    transition: opacity 0.5s ease-in;
}

.award-enter,
.award-leave-to {
    opacity: 0;
}
</style>
