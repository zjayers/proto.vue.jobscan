<template>
    <div>
        <button-dock/>
        <side-bar :id="SIDEBAR_JOB_BOARD" title="Job Board"/>
        <side-bar :id="SIDEBAR_GENERATORS" title="Generators"/>
        <side-bar :id="SIDEBAR_METRICS" title="Metrics"/>
        <side-bar :id="SIDEBAR_PERSONAL" title="Personal"/>
    </div>
</template>

<script>


import ButtonDock from "../components/ButtonDock/JxButtonDock";
import SideBar from "../components/SideBars/SideBar";
import {SIDEBAR_GENERATORS, SIDEBAR_JOB_BOARD, SIDEBAR_METRICS, SIDEBAR_PERSONAL} from "../constants/constants";

export default {
    components: {SideBar, ButtonDock},
    data: () => ({
        SIDEBAR_JOB_BOARD,
        SIDEBAR_GENERATORS,
        SIDEBAR_METRICS,
        SIDEBAR_PERSONAL
    })
};
</script>

<style lang="scss" scoped>

.j-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    top: 50%;
    height: 300px;
    width: 300px;
    position: fixed;
    transform: translateY(-50%);
}

.j-fixed-left {
    left: 0;
}

.j-top-most {
    z-index: 99999;
}
</style>
