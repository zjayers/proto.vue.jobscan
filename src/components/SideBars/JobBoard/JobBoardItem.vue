<template>
    <transition name="fade">
        <div v-show="site.show" class="jx-site-container">
            <div class="jx-jb-site pure-material-button-contained" @click="handleItemClick">
                <p>{{ site.siteName }}</p>
            </div>
            <div class="jx-jb-image" @click="handleItemClick">
                <component :is="site.imageSrc" class="jx-jb-logo"></component>
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
        }
    },
    computed: {
        siteName() {
            return JSON.stringify(this.site);
        }
    }
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
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:first-of-type {
        margin-top: 0;
    }

    & .jx-jb-image {
        position: absolute;
        left: -6px;
        top: -6px;
        height: 28px;
        width: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10005;
        border-radius: 100px;
        background: $white;
        border: 2px solid $info;

        & .jx-jb-logo {
            height: 80%;
            width: 80%;
            border-radius: 100px;
            filter: grayscale(1) brightness(0.4);
        }
    }

    & .jx-jb-site {
        height: 100%;
        width: 100%;
        border-radius: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        & p {
            margin: 0;
        }
    }

    & .jx-jb-close {
        position: absolute;
        right: 0;
        height: 100%;
        width: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        background-color: $red;
        color: $red;
        transition: width 0.2s ease;
        filter: brightness(0.9);
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;

        &:hover {
            width: 32px;
            color: $white;
            filter: brightness(1.1);
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

.pure-material-button-contained {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: $primary;
    background-color: $white;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border: 2px solid $primary;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease;
}

.pure-material-button-contained::-moz-focus-inner {
    border: none;
}

/* Overlay */
.pure-material-button-contained::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transition: opacity 0.2s;
}

/* Ripple */
.pure-material-button-contained::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
}

/* Hover, Focus */
.pure-material-button-contained:hover,
.pure-material-button-contained:focus {
    background-color: $primary;
    color: $white;

    + div {
        animation-name: wiggle;
        animation-duration: 1000ms;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
    }
}

.pure-material-button-contained:hover::before {
    opacity: 0.08;
}

.pure-material-button-contained:focus::before {
    opacity: 0.24;
}

.pure-material-button-contained:hover:focus::before {
    opacity: 0.3;
}

/* Active */
.pure-material-button-contained:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.pure-material-button-contained:active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
}

/* Disabled */
.pure-material-button-contained:disabled {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
    box-shadow: none;
    cursor: initial;
}

.pure-material-button-contained:disabled::before {
    opacity: 0;
}

.pure-material-button-contained:disabled::after {
    opacity: 0;
}

@keyframes wiggle {
    0% {
        transform: rotate(10deg);
    }
    25% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(20deg);
    }
    75% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>
