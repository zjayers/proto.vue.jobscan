<template>
    <transition name="fade">
        <div v-show="site.show" class="jx-site-container">
            <div class="jx-jb-image" @click="handleItemClick">
                <component :is="site.imageSrc" class="jx-jb-logo"></component>
            </div>
            <div class="jx-jb-site" @click="handleItemClick">
                <p>{{ site.siteName }}</p>
            </div>
            <div class="jx-jb-close" @click="handleItemHide">x</div>
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
        handleItemHide() {
            this.updateSiteShownStatus(this.index);
        },
        handleItemClick() {
            window.location = this.site.httpAddress;
        },
    },
    computed: {
        siteName() {
            return JSON.stringify(this.site);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/theme";

.jx-site-container {
    width: 90%;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    backface-visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
        filter: brightness(1.2);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    &:first-of-type {
        margin-top: 0;
    }

    & .jx-jb-image {
        height: 40px;
        width: 40px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $info;

        & .jx-jb-logo {
            height: 80%;
            width: 80%;
            border-radius: 100px;
            filter: grayscale(100%) brightness(0.2) invert(1);
        }
    }

    & .jx-jb-site {
        background-color: $gray-200;
        flex: 1;
        padding-left: 8px;
    }

    & .jx-jb-close {
        position: absolute;
        right: 0;
        height: 42px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        background-color: $red;
        color: $red;
        transition: width 0.2s ease;
        filter: brightness(0.9);

        &:hover {
            width: 38px;
            height: 42px;
            color: $white;
        }
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
</style>
