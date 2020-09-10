<template>
    <div class="jx-button-dock">

        <div ref="accordionButton" class="jx-collapse-button" @click="toggleButtonContainerVisibility">
            <icon-work v-if="showAccordionIcon"/>
        </div>

        <div>
            <transition name="collapse">
                <div v-if="showButtonGroup" class="jx-button-container">
                    <jx-dock-button :sidebar-id="SIDEBAR_PERSONAL" icon="person-badge" left="true" title="Personal">
                        <icon-personal/>
                    </jx-dock-button>
                    <jx-dock-button :sidebar-id="SIDEBAR_JOB_BOARD" icon="briefcase" title="Job Board">
                        <icon-job-board/>
                    </jx-dock-button>
                    <jx-dock-button :sidebar-id="SIDEBAR_TEMPLATES" icon="newspaper" title="Templates">
                        <icon-templates/>
                    </jx-dock-button>
                    <jx-dock-button :sidebar-id="SIDEBAR_METRICS" icon="clipboard-data" right="true" title="Metrics">
                        <icon-metrics/>
                    </jx-dock-button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import JxDockButton from "../JxDockButton";
import {SIDEBAR_JOB_BOARD, SIDEBAR_METRICS, SIDEBAR_PERSONAL, SIDEBAR_TEMPLATES} from "../../../constants/constants";
import IconPersonal from "../../Icons/IconPersonal";
import IconJobBoard from "../../Icons/IconJobBoard";
import IconTemplates from "../../Icons/IconTemplates";
import IconMetrics from "../../Icons/IconMetrics";
import IconWork from "../../Icons/IconWork";

export default {
    name: 'ButtonDock',
    components: {IconWork, IconMetrics, IconTemplates, IconJobBoard, IconPersonal, JxDockButton},
    data: () => ({
        showButtonGroup: true,
        showAccordionIcon: false,
        SIDEBAR_JOB_BOARD,
        SIDEBAR_TEMPLATES,
        SIDEBAR_METRICS,
        SIDEBAR_PERSONAL
    }),
    methods: {
        /**
         * Toggle the button container visibility
         * Toggle the button container accordion icon
         */
        toggleButtonContainerVisibility() {
            // Hide and show the button group container
            this.showButtonGroup = !this.showButtonGroup;
            this.showAccordionIcon = !this.showAccordionIcon;
            this.$refs.accordionButton.classList.toggle('jx-collapsed');
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../../scss/theme';

.jx-button-dock {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.jx-collapse-button {
    width: 100%;
    height: 14px;
    background-color: $info;
    outline: none;
    border: none;
    border-radius: 5px;
    color: $white;
    cursor: pointer;
    margin: auto auto 8px;
    transition: all 0.5s ease;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);

    &:hover {
        filter: brightness(1.25);
        transform: translateY(-2px);
    }

    &:active {
        filter: brightness(.8);
        transform: translateY(2px);

    }
}

.jx-button-container {
    max-height: 200px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .2);
}

.jx-collapsed {
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        fill: $white;
        height: 30px;
    }
}


.collapse-enter-active, .collapse-leave-active {
    transition: max-height .5s;
}

.collapse-enter, .collapse-leave-to {
    max-height: 0;
}

</style>
