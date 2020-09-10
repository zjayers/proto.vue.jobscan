<template>
    <div :class="borderRadius" class="jx-dock-btn ripple" @click="handleButtonClick">
        <div class="jx-icon-slot">
            <slot></slot>
        </div>
        <p class="jx-btn-text">{{ title }}</p>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "JxDockButton",
    props: ['icon', 'title', 'sidebarId', 'left', 'right'],
    computed: {
        borderRadius() {
            if (this.left) return 'jx-dock-btn-left';
            if (this.right) return 'jx-dock-btn-right';
            return '';
        }
    },
    methods: {
        ...mapActions(['updateSideBarId', 'toggleSideBarVisible']),
        handleButtonClick(e) {
            this.setButtonAsActive(e.target)
            this.updateSideBarId(this.sidebarId);
            this.toggleSideBarVisible();
        },
        setButtonAsActive(buttonToBeActivated) {
            // Get All Jx-Buttons From The DOM
            const jxButtons = document.querySelectorAll('.jx-dock-btn');
            for (const button of jxButtons) {
                button === buttonToBeActivated
                    ? button.classList.add('jx-active-btn')
                    : button.classList.remove('jx-active-btn')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/theme';

.jx-icon-slot {
    padding: 0;
    margin: auto;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.jx-icon-slot svg {
    fill: $primary;
    width: 26px;
    height: 26px;
    transition: fill .25s ease;
    pointer-events: none;
}

.jx-btn-text {
    margin: 0;
    color: $primary;
    pointer-events: none;
    font-family: $font;
    font-size: 1em;
    font-weight: bold;
}

.jx-dock-btn {
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    padding: 6px 12px;
    user-select: none;
    color: $primary;
    background-color: $white;
    border: 2px solid $primary;
    transition: all 0.5s ease;
    margin-left: -2px;
}

.jx-active-btn,
.jx-dock-btn:hover {
    outline: none;
    box-shadow: none;
    color: $white;
    background-color: $primary;
    border-color: $primary;

    & .jx-icon-slot svg {
        fill: $white;
    }

    & .jx-btn-text {
        color: $white;
    }
}

.jx-dock-btn-left {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}

.jx-dock-btn-right {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}

/* Ripple effect */
.ripple {
    background-position: center;
    transition: background 0.5s ease;
}

.ripple:hover {
    background: $primary radial-gradient(circle, transparent 1%, $primary 1%) center/15000%;
}

.ripple:active {
    background-color: $primary-highlight;
    background-size: 100%;
    transition: background 0s;
}

</style>
