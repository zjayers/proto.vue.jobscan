<template>
    <div>
        <button-dock/>
        <side-bar :id="SIDEBAR_JOB_BOARD" title="Job Board"></side-bar>
        <side-bar :id="SIDEBAR_GENERATORS" title="Generators"></side-bar>
        <side-bar :id="SIDEBAR_METRICS" title="Metrics"></side-bar>
        <side-bar :id="SIDEBAR_PERSONAL" title="Personal">
            <Personal/>
        </side-bar>
    </div>
</template>

<script>
import ButtonDock from "../components/ButtonDock/JxButtonDock";
import SideBar from "../components/SideBars/SideBar";
import {SIDEBAR_JOB_BOARD, SIDEBAR_METRICS, SIDEBAR_PERSONAL, SIDEBAR_TEMPLATES} from "../constants/constants";
import Personal from "../components/SideBars/Personal/Personal";

export default {
    components: {Personal, SideBar, ButtonDock},
    data: () => ({
        SIDEBAR_JOB_BOARD,
        SIDEBAR_GENERATORS: SIDEBAR_TEMPLATES,
        SIDEBAR_METRICS,
        SIDEBAR_PERSONAL
    })
};
</script>

