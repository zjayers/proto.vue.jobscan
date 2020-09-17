<template>
    <transition name="fade">
        <div v-show="site.show" class="jx-site-container" @click="updateSiteShownStatus(index)">
            <img :src="site.imageSrc" alt="" class="logo" />
            <p>{{ site.siteName }}</p>
        </div>
    </transition>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "JobBoardItem",
    props: ["site", "index"],
    methods: {
        ...mapActions(["updateSiteShownStatus"]),
        handleItemClick() {
            
        }
    },
    computed: {
        siteName() {
            return JSON.stringify(this.site);
        }
    }
};
</script>

<style scoped lang="scss">
.jx-site-container {
    width: 90%;
    height: 40px;
    background-color: red;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    backface-visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:first-of-type {
        margin-top: 0;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: height 0.3s ease-out, opacity 0.3s ease-out, margin-bottom 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
    margin-bottom: 0;
    height: 0;
    opacity: 0;
}

.logo {
    height: 40px;
    width: 40px;
}
</style>
