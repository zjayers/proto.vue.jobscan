<template>
    <div :class="borderRadius" class="jx-dock-btn" @click="handleButtonClick">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: "JxButton",
    props: ['icon', 'title', 'sidebarId', 'left', 'right'],
    computed: {
        borderRadius() {
            if (this.left) return 'jx-dock-btn-left';
            if (this.right) return 'jx-dock-btn-right';
            return '';
        }
    },
    methods: {
        handleButtonClick(e) {
            this.setButtonAsActive(e.target)
        },
        setButtonAsActive(buttonToBeActivated) {
            // Get All Jx-Buttons From The DOM
            const jxButtons = document.querySelectorAll('.jx-dock-btn');
            for (const button of jxButtons) {

                button === buttonToBeActivated ?
                    button.classList.add('jx-active-btn')
                    :
                    button.classList.remove('jx-active-btn')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/theme';

.jx-dock-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    user-select: none;
    color: $primary;
    background-color: $white;
    border: 2px solid $primary;
    transition: all 0.25s ease;
    margin-left: -2px;

    &:active {
        filter: brightness(.8);
        transform: translateY(2px);
    }
}

.jx-active-btn,
.jx-dock-btn:hover {
    outline: none;
    box-shadow: none;
    color: $white;
    background-color: $primary;
    border-color: $primary;
}

.jx-dock-btn-left {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}

.jx-dock-btn-right {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}

</style>
