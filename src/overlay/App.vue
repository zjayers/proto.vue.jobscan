<template>
    <div class="jx-root-container">
        <confetti />
        <button-dock />
        <side-bar />
    </div>
</template>

<script>
import ButtonDock from "../components/ButtonDock/JxButtonDock";
import SideBar from "../components/SideBars/SideBar";
import Confetti from "../components/Shared/Confetti";

export default {
    components: { Confetti, SideBar, ButtonDock }
};
</script>

<style lang="scss" scoped>
.jx-root-container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 999999;
    pointer-events: none;
}
</style>
